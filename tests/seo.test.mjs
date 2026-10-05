import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { createServer } from 'node:net'
import test from 'node:test'

async function withServer(settings, check) {
  const socket = createServer()
  socket.listen(0, '127.0.0.1')
  await once(socket, 'listening')
  const port = socket.address().port
  await new Promise((resolve) => socket.close(resolve))
  const server = spawn(process.execPath, ['.output/server/index.mjs'], {
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', ...settings },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  let logs = ''
  server.stdout.on('data', (chunk) => (logs += chunk))
  server.stderr.on('data', (chunk) => (logs += chunk))
  const base = `http://127.0.0.1:${port}`
  try {
    let ready = false
    for (let attempt = 0; attempt < 100; attempt++) {
      if (server.exitCode !== null) throw new Error(logs)
      try {
        if ((await fetch(base)).ok) {
          ready = true
          break
        }
      } catch {}
      await new Promise((resolve) => setTimeout(resolve, 50))
    }
    assert.ok(ready, `Production server failed to start: ${logs}`)
    await check(base)
  } finally {
    const exited = once(server, 'exit')
    server.kill('SIGTERM')
    await exited
  }
}

const meta = (html, name) =>
  html.match(new RegExp(`<meta[^>]*name="${name}"[^>]*content="([^"]*)"`))?.[1]

test('public production pages expose canonical, metadata, schema and valid routes', async () => {
  await withServer(
    {
      NUXT_PUBLIC_SITE_URL: 'https://example.com',
      NUXT_PUBLIC_INDEXABLE: 'true',
    },
    async (base) => {
      const home = await (await fetch(base)).text()
      assert.match(
        home,
        /<title>Sistema de orçamentos para pequenos negócios \| orce-me<\/title>/,
      )
      assert.equal(
        meta(home, 'robots'),
        'index, follow, max-image-preview:large',
      )
      assert.match(home, /rel="canonical" href="https:\/\/example.com\/"/)
      assert.equal((home.match(/<h1\b/g) || []).length, 1)
      assert.match(home, /Orçamentos profissionais/)
      assert.match(home, /property="og:url" content="https:\/\/example.com\/"/)
      const schema = JSON.parse(
        home.match(
          /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s,
        )[1],
      )
      assert.equal(
        schema['@graph'].find((item) => item['@type'] === 'SoftwareApplication')
          .offers,
        undefined,
      )
      assert.equal(
        schema['@graph'].find((item) => item['@type'] === 'SoftwareApplication')
          .aggregateRating,
        undefined,
      )
      const guide = await (
        await fetch(`${base}/como-fazer-orcamento-de-servicos`)
      ).text()
      assert.match(
        guide,
        /rel="canonical" href="https:\/\/example.com\/como-fazer-orcamento-de-servicos"/,
      )
      assert.match(guide, /R\$ 5.170,00/)
      assert.notEqual(meta(guide, 'description'), meta(home, 'description'))
      const robots = await (await fetch(`${base}/robots.txt`)).text()
      assert.match(robots, /Allow: \/\n/)
      assert.match(robots, /Sitemap: https:\/\/example.com\/sitemap.xml/)
      const sitemap = await (await fetch(`${base}/sitemap.xml`)).text()
      assert.equal((sitemap.match(/<loc>/g) || []).length, 6)
      assert.ok(!sitemap.includes('localhost'))
      for (const slug of [
        'calculadora-de-desconto',
        'calculadora-de-margem',
        'calculadora-de-custo-hora',
      ]) {
        const page = await (await fetch(`${base}/${slug}`)).text()
        assert.ok(
          page.includes(`rel="canonical" href="https://example.com/${slug}"`),
        )
        assert.equal((page.match(/<h1\b/g) || []).length, 1)
        assert.ok(page.includes('application/ld+json'))
        assert.ok(home.includes(`href="/${slug}"`))
        assert.ok(sitemap.includes(`https://example.com/${slug}`))
      }

      assert.equal((await fetch(`${base}/pagina-inexistente`)).status, 404)
      const calculator = await (
        await fetch(`${base}/calculadora-de-orcamento`)
      ).text()
      assert.match(
        calculator,
        /rel="canonical" href="https:\/\/example.com\/calculadora-de-orcamento"/,
      )
      assert.match(calculator, /Custo total informado/)
      assert.match(calculator, /R\$\s500,00/)
      assert.match(home, /href="\/calculadora-de-orcamento"/)
      assert.match(home, /data-nosnippet/)
      const redirect = await fetch(
        `${base}/calculadora-de-orcamento/?utm_source=test`,
        { redirect: 'manual' },
      )
      assert.equal(redirect.status, 301)
      assert.equal(
        redirect.headers.get('location'),
        '/calculadora-de-orcamento?utm_source=test',
      )

      assert.ok(!home.includes('fonts.googleapis.com'))
      assert.ok(!home.includes('fonts.gstatic.com'))
      const font = home.match(/rel="preload" href="([^"]+\.woff2)"/)[1]
      const fontResponse = await fetch(`${base}${font}`)
      assert.equal(fontResponse.status, 200)
      assert.equal(
        Buffer.from(await fontResponse.arrayBuffer())
          .subarray(0, 4)
          .toString(),
        'wOF2',
      )
      assert.match(
        home,
        /property="og:image" content="https:\/\/example.com\/social-card.png"/,
      )
      const imageResponse = await fetch(`${base}/social-card.png`)
      assert.equal(imageResponse.status, 200)
      const png = Buffer.from(await imageResponse.arrayBuffer())
      assert.equal(png.readUInt32BE(16), 1200)
      assert.equal(png.readUInt32BE(20), 630)
      const guideSchema = JSON.parse(
        guide.match(
          /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s,
        )[1],
      )
      const breadcrumb = guideSchema['@graph'].find(
        (item) => item['@type'] === 'BreadcrumbList',
      )
      assert.deepEqual(
        breadcrumb.itemListElement.map((item) => item.position),
        [1, 2],
      )
      assert.equal(
        breadcrumb.itemListElement[1].item,
        'https://example.com/como-fazer-orcamento-de-servicos',
      )
      assert.match(guide, /aria-label="Caminho da página"/)
      const tracked = await (await fetch(`${base}/?utm_source=test`)).text()
      assert.match(tracked, /rel="canonical" href="https:\/\/example.com\/"/)
    },
  )
})

test('preview builds cannot be indexed when indexable is false', async () => {
  await withServer(
    {
      NUXT_PUBLIC_SITE_URL: 'https://example.com',
      NUXT_PUBLIC_INDEXABLE: 'false',
    },
    async (base) => {
      assert.equal(
        meta(await (await fetch(base)).text(), 'robots'),
        'noindex, follow',
      )
      assert.match(
        await (await fetch(`${base}/robots.txt`)).text(),
        /Allow: \//,
      )
      assert.ok(
        !(await (await fetch(`${base}/sitemap.xml`)).text()).includes('<loc>'),
      )
    },
  )
})

test('an unconfigured origin never generates localhost canonicals or sitemap entries', async () => {
  await withServer(
    { NUXT_PUBLIC_SITE_URL: '', NUXT_PUBLIC_INDEXABLE: 'true' },
    async (base) => {
      const html = await (await fetch(base)).text()
      assert.equal(meta(html, 'robots'), 'noindex, follow')
      assert.ok(!html.includes('rel="canonical"'))
      assert.ok(
        !(await (await fetch(`${base}/sitemap.xml`)).text()).includes('<loc>'),
      )
    },
  )
})

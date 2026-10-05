export default defineEventHandler((event) => {
  const { origin, indexable } = searchConfig(event)
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
    : 'User-agent: *\nAllow: /\n'
})

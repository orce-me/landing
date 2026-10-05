import { siteOrigin } from '#shared/utils/seo'

export function usePageSeo(options: {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
}) {
  const config = useRuntimeConfig()
  const origin = siteOrigin(config.public.siteUrl)
  const canonical = origin
    ? new URL(options.path, `${origin}/`).href
    : undefined
  const indexable = Boolean(
    origin && String(config.public.indexable) === 'true' && !import.meta.dev,
  )

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: indexable
      ? 'index, follow, max-image-preview:large'
      : 'noindex, follow',
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.type || 'website',
    ogLocale: 'pt_BR',
    ogSiteName: 'orce-me',
    ogUrl: canonical,
    ogImage: origin ? `${origin}/social-card.png` : undefined,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/png',
    ogImageAlt: 'orce-me — Orçamentos de produtos e serviços em PDF',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: origin ? `${origin}/social-card.png` : undefined,
    twitterImageAlt: 'orce-me — Orçamentos de produtos e serviços em PDF',
  })

  useHead({
    link: canonical
      ? [{ key: 'canonical', rel: 'canonical', href: canonical }]
      : [],
  })
  return { origin, canonical }
}

import { siteOrigin } from '#shared/utils/seo'

export function searchConfig(event: Parameters<typeof useRuntimeConfig>[0]) {
  const config = useRuntimeConfig(event)
  const origin = siteOrigin(config.public.siteUrl)
  return {
    origin,
    indexable: Boolean(
      origin && String(config.public.indexable) === 'true' && !import.meta.dev,
    ),
  }
}

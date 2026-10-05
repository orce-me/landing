export default defineEventHandler((event) => {
  const { indexable } = searchConfig(event)
  if (!indexable) setHeader(event, 'X-Robots-Tag', 'noindex, follow')
})

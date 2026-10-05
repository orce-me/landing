import { indexablePaths } from '#shared/utils/seo'

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const normalized = url.pathname.replace(/\/+$/, '') || '/'
  if (
    normalized !== url.pathname &&
    indexablePaths.some((path) => path === normalized)
  ) {
    return sendRedirect(event, `${normalized}${url.search}`, 301)
  }
})

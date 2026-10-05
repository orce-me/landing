export const indexablePaths = [
  '/',
  '/como-fazer-orcamento-de-servicos',
  '/calculadora-de-orcamento',
  '/calculadora-de-desconto',
  '/calculadora-de-margem',
  '/calculadora-de-custo-hora',
  '/calculadora-de-ponto-de-equilibrio',
] as const

// Canonicals and sitemaps must never depend on the incoming Host header.
export function siteOrigin(value: string): string {
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.username || url.password) return ''
    if (
      url.hostname === 'localhost' ||
      url.hostname.endsWith('.localhost') ||
      url.hostname === '127.0.0.1'
    )
      return ''
    return url.origin
  } catch {
    return ''
  }
}

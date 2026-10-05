export function calculateBusinessTool(kind: string, a: number, b: number) {
  if (![a, b].every(Number.isFinite) || a < 0 || b < 0)
    return { error: 'Informe números válidos, iguais ou maiores que zero.' }
  if (kind === 'discount') {
    if (b > 100) return { error: 'O desconto deve ficar entre 0% e 100%.' }
    const saving = a * (b / 100)
    return { value: a - saving, detail: saving }
  }
  if (kind === 'hourly') {
    if (b === 0) return { error: 'Informe mais de zero horas faturáveis.' }
    const value = a / b
    return Number.isFinite(value)
      ? { value }
      : { error: 'Revise os valores informados.' }
  }
  if (b === 0) return { error: 'O preço de venda deve ser maior que zero.' }
  const value = ((b - a) / b) * 100
  const detail = a === 0 ? undefined : ((b - a) / a) * 100
  if (
    !Number.isFinite(value) ||
    (detail !== undefined && !Number.isFinite(detail))
  )
    return { error: 'Revise os valores informados.' }
  return { value, detail }
}

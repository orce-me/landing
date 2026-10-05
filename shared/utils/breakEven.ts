export function breakEven(fixed: number, price: number, variable: number) {
  if (
    ![fixed, price, variable].every(Number.isFinite) ||
    [fixed, price, variable].some((v) => v < 0)
  )
    return { error: 'Informe valores válidos, iguais ou maiores que zero.' }
  const contribution = price - variable
  if (contribution <= 0)
    return {
      error:
        'O preço precisa superar o custo variável para cobrir os custos fixos.',
    }
  const units = Math.ceil(fixed / contribution)
  const revenue = units * price
  if (![units, revenue].every(Number.isFinite) || !Number.isSafeInteger(units))
    return { error: 'Os valores são muito altos. Revise os campos.' }
  return {
    rows: [
      {
        label: 'Vendas necessárias no período',
        value: units,
        format: 'integer',
      },
      {
        label: 'Faturamento para essa quantidade',
        value: revenue,
        format: 'money',
      },
      { label: 'Contribuição por venda', value: contribution, format: 'money' },
    ],
  }
}

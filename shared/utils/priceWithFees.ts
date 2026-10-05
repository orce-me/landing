export function priceWithFees(cost: number, fees: number, margin: number) {
  if (
    ![cost, fees, margin].every(Number.isFinite) ||
    [cost, fees, margin].some((value) => value < 0)
  )
    return { error: 'Informe valores válidos, iguais ou maiores que zero.' }
  if (fees + margin >= 100)
    return { error: 'A soma das taxas e da margem precisa ser menor que 100%.' }
  const price = cost / (1 - (fees + margin) / 100)
  const feeAmount = price * (fees / 100)
  const difference = price - feeAmount - cost
  if (![price, feeAmount, difference].every(Number.isFinite))
    return { error: 'Os valores são muito altos. Revise os campos.' }
  return {
    rows: [
      { label: 'Preço de venda estimado', value: price, format: 'money' },
      { label: 'Taxas sobre a venda', value: feeAmount, format: 'money' },
      {
        label: 'Diferença após custos e taxas',
        value: difference,
        format: 'money',
      },
    ],
  }
}

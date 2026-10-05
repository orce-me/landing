export type QuoteCosts = {
  materials: number
  hours: number
  hourlyCost: number
  expenses: number
  margin: number
}

export function estimateQuote(costs: QuoteCosts) {
  const values = [
    costs.materials,
    costs.hours,
    costs.hourlyCost,
    costs.expenses,
    costs.margin,
  ]
  if (values.some((value) => !Number.isFinite(value) || value < 0)) {
    return {
      error: 'Preencha todos os campos com números iguais ou maiores que zero.',
    } as const
  }
  if (costs.margin >= 100) {
    return { error: 'A margem precisa ser menor que 100%.' } as const
  }
  const labor = costs.hours * costs.hourlyCost
  const cost = costs.materials + labor + costs.expenses
  const price = cost / (1 - costs.margin / 100)
  if (![labor, cost, price].every(Number.isFinite)) {
    return { error: 'Os valores são muito altos. Revise os campos.' } as const
  }
  return { labor, cost, price, difference: price - cost } as const
}

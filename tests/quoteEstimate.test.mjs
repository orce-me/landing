import assert from 'node:assert/strict'
import test from 'node:test'
import { estimateQuote } from '../shared/utils/quoteEstimate.ts'

const costs = {
  materials: 250,
  hours: 2,
  hourlyCost: 60,
  expenses: 30,
  margin: 20,
}
test('target margin is calculated on sale price, not as cost markup', () => {
  const result = estimateQuote(costs)
  assert.equal(result.cost, 400)
  assert.equal(result.price, 500)
  assert.equal(result.difference / result.price, 0.2)
})
test('zero margin recovers informed costs and fractional hours are supported', () => {
  const result = estimateQuote({ ...costs, hours: 0.5, margin: 0 })
  assert.equal(result.labor, 30)
  assert.equal(result.price, 310)
})
test('blank, negative, nonfinite and impossible margins never produce a price', () => {
  for (const input of [
    { ...costs, hours: NaN },
    { ...costs, expenses: -1 },
    { ...costs, materials: Infinity },
    { ...costs, margin: 100 },
    { ...costs, margin: 101 },
  ]) {
    assert.ok(estimateQuote(input).error)
    assert.equal(estimateQuote(input).price, undefined)
  }
})

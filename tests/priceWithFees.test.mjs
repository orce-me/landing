import assert from 'node:assert/strict'
import test from 'node:test'
import { priceWithFees } from '../shared/utils/priceWithFees.ts'
test('fees and target margin are recovered from the sale-price base', () => {
  const result = priceWithFees(400, 5, 20)
  const price = result.rows[0].value
  const fees = result.rows[1].value
  const difference = result.rows[2].value
  assert.ok(Math.abs(fees / price - 0.05) < 1e-12)
  assert.ok(Math.abs(difference / price - 0.2) < 1e-12)
  assert.ok(Math.abs(price - fees - difference - 400) < 1e-12)
  assert.equal(priceWithFees(400, 0, 0).rows[0].value, 400)
  assert.equal(priceWithFees(0, 5, 20).rows[0].value, 0)
})
test('rates consuming the full sale and invalid costs are rejected', () => {
  for (const input of [
    [400, 80, 20],
    [400, 90, 20],
    [-1, 5, 20],
    [400, NaN, 20],
    [Infinity, 5, 20],
  ])
    assert.ok(priceWithFees(...input).error)
})

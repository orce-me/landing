import assert from 'node:assert/strict'
import test from 'node:test'
import { calculateBusinessTool as calculate } from '../shared/utils/businessTools.ts'
test('discounts include full discount and sequential application', () => {
  assert.deepEqual(calculate('discount', 500, 10), { value: 450, detail: 50 })
  assert.equal(calculate('discount', 450, 10).value, 405)
  assert.equal(calculate('discount', 500, 100).value, 0)
  assert.ok(calculate('discount', 500, 101).error)
})
test('margin and markup use distinct bases and support loss and zero cost', () => {
  assert.deepEqual(calculate('margin', 400, 500), { value: 20, detail: 25 })
  assert.equal(calculate('margin', 500, 400).value, -25)
  assert.deepEqual(calculate('margin', 0, 500), {
    value: 100,
    detail: undefined,
  })
  assert.ok(calculate('margin', 100, 0).error)
})
test('hourly cost uses billable hours and rejects invalid input', () => {
  assert.equal(calculate('hourly', 6000, 100).value, 60)
  for (const [a, b] of [
    [6000, 0],
    [NaN, 10],
    [500, -1],
    [Infinity, 10],
  ])
    assert.ok(calculate('hourly', a, b).error)
})

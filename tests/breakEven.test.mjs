import assert from 'node:assert/strict'
import test from 'node:test'
import { breakEven } from '../shared/utils/breakEven.ts'
test('break-even covers fixed costs and rounds indivisible sales upward', () => {
  assert.equal(breakEven(3000, 200, 80).rows[0].value, 25)
  const result = breakEven(3001, 200, 80)
  assert.equal(result.rows[0].value, 26)
  assert.equal(result.rows[1].value, 5200)
  assert.ok(26 * (200 - 80) >= 3001)
  assert.ok(25 * (200 - 80) < 3001)
  assert.equal(breakEven(0, 200, 80).rows[0].value, 0)
})
test('nonpositive contribution and invalid inputs cannot yield a sales target', () => {
  for (const inputs of [
    [3000, 80, 80],
    [3000, 70, 80],
    [-1, 200, 80],
    [NaN, 200, 80],
    [Infinity, 200, 80],
  ])
    assert.ok(breakEven(...inputs).error)
})

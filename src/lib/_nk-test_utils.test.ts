import { describe, it } from 'vitest'
import { getAverageValue } from "./utils";

describe('getAverageValue', () => {
  it('getAverageValue（测试平均值）:6', async ({ expect }) => {
    const min = 2;
    const max = 10;
    const result = getAverageValue(min, max);
    expect(result).toBe(6);
  })

  it('getAverageValue（测试平均值）:8', async ({ expect }) => {
    const min = 6;
    const max = 10;
    const result = getAverageValue(min, max);
    expect(result).toBe(8);
  })
})
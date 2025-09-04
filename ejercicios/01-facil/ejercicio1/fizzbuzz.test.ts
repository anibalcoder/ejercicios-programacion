import { test, expect } from "vitest"
import { fizzbuzz } from "./fizzbuzz.js"

function fizzbuzzExpected (limit: number) {
  return Array.from({ length: limit }).map((_, i) => {
    const n = i + 1

    if ((n % 3 === 0) && (n % 5 === 0)) return 'fizzbuzz'
    if (n % 3 === 0) return 'fizz'
    if (n % 5 === 0) return 'buzz'
    return `${n}`
  })
}

test("Fizzbuzz hasta 20", () => {
  expect(fizzbuzz(20)).toEqual(fizzbuzzExpected(20))
})
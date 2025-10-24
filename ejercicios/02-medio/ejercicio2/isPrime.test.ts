import { isPrime } from "./isPrime.js"

describe('Comprobar si un número es o no primo.', () => {
  test('debe retornar false si es negativo, cero o uno', () => {
    const notPrimes = [-10, -1, 0, 1]

    for (const num of notPrimes) {
      expect(isPrime(num)).toBe(false)
    }
  })

  test('debe retornar true para los 12 primeros números primos', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]

    for(const num of primes) {
      expect(isPrime(num)).toBe(true)
    }
  })

  test('debe retornar false para los 12 primeros números compuestos', () => {
    const notPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21]

    for(const num of notPrimes) {
      expect(isPrime(num)).toBe(false)
    }
  })
})
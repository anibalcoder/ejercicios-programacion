/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 * 
 * * REGLAS DE UN NÚMERO PRIMO
 * - Debe ser un número natural mayor que 1.
 * - Solo tiene dos divisores positivos distintos: él mismo y el número 1.
 * - El único número par primo es el 2.
 */

export function isPrime(num: number): boolean {
  if (num <= 1) return false
  if (num === 2 || num === 3) return true
  if (num % 2 === 0) return false // descartar pares

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) return false
  }

  return true
}

export function printPrime(limit: number) {
  for (let i = 0; i < limit; i++) {
    if (isPrime(i)) console.log(i)
  }
}
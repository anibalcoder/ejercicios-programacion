/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

export function fizzbuzz (limit: number): string[] {
  const result: string[] = []

  for ( let i = 1; i <= limit; i++ ) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
      result.push("fizzbuzz")
    } else if (i % 3 === 0) {
      result.push("fizz")
    } else if (i % 5 === 0) {
      result.push("buzz")
    } else {
      result.push(`${i}`)
    }
  }

  return result
}
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - El número total de letras en ambas palabras debe ser idéntico
 * - Dos palabras exactamente iguales no son anagrama.
 */

interface Anagram {
  word1: string
  word2: string
}

export function anagram({ word1, word2 }: Anagram): boolean {
  const lowercaseWord1 = word1.toLowerCase()
  const lowercaseWord2 = word2.toLowerCase()

  if (lowercaseWord1.length !== lowercaseWord2.length) return false
  if (lowercaseWord1 === lowercaseWord2) return false

  const orderedWord1 = lowercaseWord1.split('').toSorted().join('')
  const orderedWord2 = lowercaseWord2.split('').toSorted().join('')

  if (orderedWord1 === orderedWord2) return true
  return false
}
import { anagram } from "./anagram.js"
import { describe, test, expect } from "vitest"

describe('anagram', () => {
  test("debería retornar false si las palabras son idénticas", () => {
    expect(anagram({ word1: "roma", word2: "roma" })).toBe(false);
  });
  
  test("debería retorna true ignorando mayúsculas", () => {
    expect(anagram({ word1: "Roma", word2: "Amor" })).toBe(true);
  });

  test("debería retornar true si las palabras son anagramas válidos", () => {
    expect(anagram({ word1: "roma", word2: "amor" })).toBe(true);
  });
})
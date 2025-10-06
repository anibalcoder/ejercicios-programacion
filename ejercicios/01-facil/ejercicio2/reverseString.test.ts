import { expect, test } from "vitest";
import { reverseString } from "./reverseString.js"

test("Debería invertir el orden de una cadena de texto", () => {
  expect(reverseString("Hola mundo")).toBe("odnum aloH")
})
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("example test", () => {
  const actual = 1 + 1;
  const expected = 2;
  assertEquals(actual, expected);
});
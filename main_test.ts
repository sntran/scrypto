import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";
import fixtures from "https://raw.githubusercontent.com/cryptocoinjs/scryptsy/master/test/fixtures.json" assert {
  type: "json",
};

import { scrypt } from "./main.ts";

Deno.test("scrypt", async (t) => {
  await t.step("> when valid", async (t) => {
    for await (const fixture of fixtures.valid) {
      await t.step(fixture.description, async () => {
        const {
          key: password,
          salt,
          iterations: N,
          memory: r,
          parallel: p,
          keyLen: dkLen,
          result,
        } = fixture;
        assertEquals(await scrypt(password, salt, { N, r, p, dkLen }), result);
      });
    }
  });
});

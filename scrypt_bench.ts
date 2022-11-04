import { default as scryptsy } from "https://esm.sh/scryptsy";
import { scrypt as scrypt_js } from "https://esm.sh/scrypt-js";
import {
  instantiate,
  scrypt_hash as scrypt_wasm,
} from "https://deno.land/x/scrypt@v4.2.1/lib/_wasm/scrypt_wasm.generated.js";
import { scrypt as scrypt_node } from "https://deno.land/std@0.161.0/node/crypto.ts";
import { scrypt as scrypto } from "./scrypt.ts";

const encoder = new TextEncoder();

const password = encoder.encode("pleaseletmein");
const salt = encoder.encode("SodiumChloride");

const N = 16384;
const r = 8;
const p = 1;
const keySize = 64;

Deno.bench("npm/scryptsy", async () => {
  await scryptsy(password, salt, N, r, p, keySize);
});

Deno.bench("npm/scrypt.js", async () => {
  await scrypt_js(password, salt, N, r, p, keySize);
});

Deno.bench("std/node/crypto/scrypt", async () => {
  await scrypt_node(password, salt, keySize, {
    N,
    r,
    p,
  }, (err, key) => {
    // console.assert(key == RESULT);
  });
});

Deno.bench("x/scrypt", () => {
  instantiate();
  scrypt_wasm(password, salt, N, r, p, keySize);
});

Deno.bench("scrypto", async () => {
  await scrypto(password, salt, N, r, p, keySize);
});

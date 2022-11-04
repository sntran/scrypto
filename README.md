# scrypto

An async JavaScript Scrypt implementation using Web Cryptography APIs for
PBKDF2.

## Getting started

Import the `scrypt` function and use:

```ts
import { scrypt } from "https://deno.land/x/scrypto@v1.0.0/main.ts";

const result = await scrypt("password", "salt", {
  N: 16384,
  r: 8,
  p: 1,
  dkLen: 64,
});
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```shell
deno run https://deno.land/x/scrypto@v1.0.0/main.ts <password> <salt>
```

You can also install it globally using the following:

```shell
deno install --allow-net=deno.land -n scrypt https://deno.land/x/scrypto@v1.0.0/main.ts
```

Then, the package is available to run:

```shell
scrypt <password> <salt>
```

## Benchmarks

The following benchmarks are done with `deno bench --unstable scrypt_bench.ts`
using default parameters:

```shell
cpu: Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz
runtime: deno 1.27.0 (x86_64-apple-darwin)

file:///Users/sntran/scrypto/scrypt_bench.ts
benchmark                   time (avg)             (min … max)       p75       p99      p995
-------------------------------------------------------------- -----------------------------
npm/scryptsy            813.46 ms/iter (807.32 ms … 820.44 ms) 816.48 ms 820.44 ms 820.44 ms
npm/scrypt.js              1.53 s/iter       (1.51 s … 1.54 s)    1.53 s    1.54 s    1.54 s
std/node/crypto/scrypt  754.79 ms/iter (753.04 ms … 755.72 ms) 755.39 ms 755.72 ms 755.72 ms
x/scrypt                 148.1 ms/iter  (147.64 ms … 148.5 ms) 148.22 ms  148.5 ms  148.5 ms
scrypto                 240.35 ms/iter  (236.89 ms … 259.5 ms) 239.72 ms  259.5 ms  259.5 ms
```

## Development

Run tests:

```shell
deno test
```

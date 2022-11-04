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

## Development

Run tests:

```shell
deno test
```

import { scrypt as _scrypt } from "./scrypt.ts";

type Params = {
  N: string | number;
  r: string | number;
  p: string | number;
  dkLen: string | number;
}

const defaults: Params = {
  "N": 16384,
  "r": 8,
  "p": 1,
  "dkLen": 64,
}

const encoder = new TextEncoder();

export async function scrypt(password: string, salt: string, params: Partial<Params> = {}): Promise<string> {
  const { N, r, p, dkLen } = {...defaults, ...params};
  const key = await _scrypt(encoder.encode(password), encoder.encode(salt), N, r, p, dkLen, () => {});
  return new Uint8Array(key).reduce((a, b) => a + b.toString(16).padStart(2, "0"), "");
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const { parse } = await import("https://deno.land/std@0.162.0/flags/mod.ts");

  const {
    _: [password, salt],
    ...params
  } = parse(Deno.args, {
    string: [
      "_",
      "N",
      "r",
      "p",
      "dkLen",
    ],
    default: defaults,
  });

  const key = await scrypt(password, salt, params);
  console.log(key);
}

/**
 * GENERIC PORTFOLIO SNIPPET — not production source.
 *
 * A small Result type so call sites handle success and failure
 * without throwing. Invented for this showcase; not a Commit Happens
 * module and not a copy of any private validator.
 */

export type Result<T, E extends string = string> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function err<E extends string>(error: E): Result<never, E> {
  return { ok: false, error };
}

export function readJson(text: string): Result<unknown, "invalid_json"> {
  try {
    return ok(JSON.parse(text) as unknown);
  } catch {
    return err("invalid_json");
  }
}

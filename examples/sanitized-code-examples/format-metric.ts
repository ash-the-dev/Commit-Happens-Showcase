/**
 * GENERIC PORTFOLIO SNIPPET — not production source.
 *
 * Display helpers for compact dashboard numbers. Field names and
 * rounding rules were invented here and are not product formulas.
 */

export function compactCount(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "—";
  if (value < 1000) return String(Math.round(value));
  if (value < 1_000_000) return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
}

export function percent(value: number, digits = 1): string {
  if (!Number.isFinite(value)) return "—";
  return `${value.toFixed(digits)}%`;
}

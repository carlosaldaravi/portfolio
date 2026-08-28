import type { Jump } from "@/types/kitesurf";

/**
 * A jump's metadata is stored as an ordered list of single-key objects
 * (`[{ hangtime }, { date }, { spot }, …]`). Look entries up by key rather than
 * by position: the order is data, not a contract, and a missing entry should
 * render as blank instead of throwing.
 */
export function getJumpText(jump: Jump, key: string): string | number | undefined {
  return jump.texts.find((entry) => key in entry)?.[key];
}

export const getJumpString = (jump: Jump, key: string): string =>
  String(getJumpText(jump, key) ?? "");

export const getJumpNumber = (jump: Jump, key: string): number =>
  Number(getJumpText(jump, key) ?? 0);

/** "dd/mm/yyyy" (as authored in kitesurf.json) -> epoch millis, 0 if absent. */
export function getJumpDate(jump: Jump): number {
  const [day, month, year] = getJumpString(jump, "date").split("/");
  if (!day || !month || !year) return 0;
  return new Date(`${year}/${month}/${day}`).getTime();
}

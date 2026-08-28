/**
 * Immutable helpers for the CV's editable lists. Every section keeps an array
 * of `{ id, ... }` entries and only ever needs these three operations, so they
 * live here instead of being rewritten per section — where using the array
 * captured in the closure instead of the previous state was a live bug.
 */
interface Identifiable {
  id: string;
}

export const replaceById = <T extends Identifiable>(items: T[], updated: T): T[] =>
  items.map((item) => (item.id === updated.id ? updated : item));

export const patchById = <T extends Identifiable>(
  items: T[],
  id: string,
  patch: Partial<T>
): T[] => items.map((item) => (item.id === id ? { ...item, ...patch } : item));

export const removeById = <T extends Identifiable>(items: T[], id: string): T[] =>
  items.filter((item) => item.id !== id);

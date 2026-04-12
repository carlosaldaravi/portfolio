export const JUMPS_ORDER_TYPES = {
  date: "date",
  spot: "spot",
  hangtime: "hangtime",
} as const;

export type JumpsOrder = (typeof JUMPS_ORDER_TYPES)[keyof typeof JUMPS_ORDER_TYPES];

interface LaravelProps {
  size?: string;
}

export const Laravel = ({ size }: LaravelProps) => {
  return (
    <svg
      className={size ? size : "size-16"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="0.7"
    >
      <path d="M24 5v6h-1l-4 2v6l-9 5-9-5-1-1V3h1l4-3 5 3v10l4-3V5l5-2 4 2h1zm-1 5V6l-2 1-2 1v5l4-3zm-5 8v-4l-2 1-6 4v4l8-5zM1 4v14l8 5v-4l-4-3V6L3 5 1 4zm4-3L1 3l4 2 4-2-4-2zm2 13 2-1V4L8 5 6 6v9l1-1zM19 3l-4 3 4 2 4-2-4-3zm-1 5-2-1-1-1v4l2 2 1 1V8zm-8 10 5-3 3-2-4-2-4 3-4 2 4 2z" />
    </svg>
  );
};

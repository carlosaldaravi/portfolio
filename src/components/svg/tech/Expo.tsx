interface ExpoProps {
  size?: string;
}

export const Expo = ({ size }: ExpoProps) => {
  return (
    <svg
      className={size ? size : "size-16"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      stroke="currentColor"
    >
      <path d="M24 16c2 0 4-2 4-4l-2-1c-2 0-3 3-2 5zM15 5l5-3-1-1-8 4h1l1 1 2-1zm6-4 3 8a5 5 0 0 0 3 10l3 8-8 5h-1l-2-2h-1l-5-13-8 5-2-1s-1 0 0 0l8-16 8-5zm-8 5-2-1-8 16h2l6-9h1l7 18 2 1-8-25zm13 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

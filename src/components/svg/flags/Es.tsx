import { useFlagClassName } from "./useFlagClassName";

export const Es = () => {
  const { className, handlers } = useFlagClassName("es");

  return (
    <svg className={className} {...handlers} viewBox="0 0 6 4">
      <path fill="#ad1519" d="M0 0h6v4H0z" />
      <path fill="#fabd00" d="M0 1h6v2H0z" />
    </svg>
  );
};

interface VueProps {
  size?: string;
}

export const Vue = ({ size }: VueProps) => {
  return (
    <svg className={size ? size : "w-16 h-16"} viewBox="0 0 261.76 226.69">
      <g transform="matrix(1.333 0 0 -1.333 -76.3 313.3)">
        <path
          fill="#41b883"
          d="m178 235-22.6-39.3-22.7 39.3H57.2l98.2-170 98.2 170z"
        />
        <path
          fill="#34495e"
          d="m178 235-22.6-39.3-22.7 39.3H96.5l58.9-102 58.9 102z"
        />
      </g>
    </svg>
  );
};

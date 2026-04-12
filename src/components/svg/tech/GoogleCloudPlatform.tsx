interface GoogleCloudPlatformProps {
  size?: string;
}

export const GoogleCloudPlatform = ({ size }: GoogleCloudPlatformProps) => {
  return (
    <svg
      className={size ? size : "size-16"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path
        d="m322 141-44-77H163c-11 0-20 6-25 15L44 242c-5 9-5 19 0 28l36 62 44-76 66-115h132z"
        fill="#f8bb16"
      />
      <path
        d="M468 242 375 79c-6-9-15-15-25-15h-72l44 77 67 115-67 115h88l58-101c5-9 5-19 0-28"
        fill="#ea4334"
      />
      <path
        d="M410 371H190l-66-115-44 76 58 101c5 9 14 15 24 15h188c10 0 19-6 24-15l36-62z"
        fill="#0074bc"
      />
      <path
        d="M322 371H190l-66-115 66-115h132l67 115-67 115zm-66-172a57 57 0 1 0 0 115 57 57 0 1 0 0-115z"
        fill="#e2e3e4"
      />
    </svg>
  );
};

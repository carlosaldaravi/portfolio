import { ChangeEvent, Ref } from "react";

interface InputProps {
  id?: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  refPassed?: Ref<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({
  id,
  name,
  type,
  value,
  placeholder,
  required,
  className = "",
  refPassed,
  onChange,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`my-4 text-xl sm:text-2xl font-semibold ${className}`}
      required={required}
      ref={refPassed}
    />
  );
};

export default Input;

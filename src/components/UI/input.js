const Input = ({
    id,
  name,
  type,
  value,
  placeholder,
  required,
  className,
  refPassed,
  onChange,
}) => {
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

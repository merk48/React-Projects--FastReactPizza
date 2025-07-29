function FormInput({
  name = null,
  type = "text",
  placeholder = "",
  required = true,
  value = null,
  onChange,
  className = "",
}) {
  return (
    <input
      className={`w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 ${className}`}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}
export default FormInput;

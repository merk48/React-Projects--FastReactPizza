function FormInput({
  name = null,
  type = "text",
  label = null,
  placeholder = "",
  required = true,
  errors = null,
  value = "",
  onChange,
  className = "",
}) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      <span>{errors && errors?.[name] && errors[name]}</span>
    </div>
  );
}

export default FormInput;

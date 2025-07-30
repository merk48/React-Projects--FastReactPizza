// function FormInput({
//   name = null,
//   type = "text",
//   placeholder = "",
//   required = true,
//   disabled = false,
//   value = undefined,
//   defaultValue = undefined,
//   onChange,
//   className = "",
// }) {
//    const inputProps = value !== undefined
//       ? { value, onChange: /* … */ }
//       : { defaultValue };

//   return (
//     <input
//       className={`w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 ${className}`}
//       type={type}
//       name={name}
//       id={name}
//       placeholder={placeholder}
//       required={required}
//       disabled={disabled}
//       value={value}
//       defaultValue={defaultValue}
//       onChange={onChange}
//     />
//   );
// }
// export default FormInput;

function FormInput({
  name = null,
  type = "text",
  placeholder = "",
  required = true,
  disabled = false,
  value, // undefined unless parent passes it
  defaultValue, // undefined unless parent passes it
  onChange,
  className = "",
}) {
  // Decide which props to apply
  const inputProps =
    value !== undefined
      ? { value, onChange } // controlled
      : { defaultValue }; // uncontrolled

  return (
    <input
      className={`w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 ${className}`}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      {...inputProps} // spread only the correct props
    />
  );
}

export default FormInput;

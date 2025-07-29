function FormBox({
  children,
  type = "",
  name = null,
  label = null,
  errors = null,
  className = "",
}) {
  return (
    <div className={`mb-5 flex flex-col gap-1 ${className}`}>
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        {label && (
          <label className="mb-3 ml-0.5 sm:m-0 sm:basis-40" htmlFor={name}>
            {label}
          </label>
        )}
        {children}
      </div>
      {errors && (
        <span className="ml-auto rounded-md bg-red-100 px-1 text-xs font-semibold text-red-700 sm:text-sm">
          {errors?.[name] && `${errors[name]} &uarr;`}
        </span>
      )}
    </div>
  );
}

export default FormBox;

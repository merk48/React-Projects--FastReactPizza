import { Link } from "react-router-dom";

function Button({
  children,
  type = "primary",
  disabled,
  onClick,
  to = null,
  className = "",
}) {
  const base = `inline-block rounded-full bg-yellow-400  font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ${disabled ? "bg-yellow-300" : ""}`;

  const styles = {
    primary: base + ` px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base`,
    small: base + ` px-3 py-1 text-xs sm:px-5 sm:py-2.5 sm:text-sm`,
    secondary:
      base +
      ` text-stone-500 bg-transparent border-2 border-stone-300 px-4 py-2 text-sm sm:px-6 sm:py-3 hover:bg-stone-200 hover:text-stone-800 sm:text-base focus:ring-stone-200 focus:text-stone-800`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles[type]} ${className}`}
    >
      {to ? <Link to={to}>{children}</Link> : children}
    </button>
  );
}

export default Button;

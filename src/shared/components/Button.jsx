import { Link } from "react-router-dom";

function Button({ children, disabled, onClick, to = null, className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-3 sm:text-base ${disabled ? "bg-yellow-300" : ""} ${className}`}
    >
      {to ? <Link to={to}>{children}</Link> : children}
    </button>
  );
}

export default Button;

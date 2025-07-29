import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";

  return (
    <>
      {to !== "-1" ? (
        <Link to={to} className={className}>
          {children}
        </Link>
      ) : (
        <button className={className} onClick={() => navigate(-1)}>
          {" "}
          {children}
        </button>
      )}
    </>
  );
}

export default LinkButton;

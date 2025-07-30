import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-32 rounded-full px-2 py-1 text-sm text-stone-500 transition-all duration-300 placeholder:text-stone-400 focus:w-48 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:px-4 sm:py-2 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;

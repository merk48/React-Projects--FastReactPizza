import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/components/SearchOrder";
import Username from "../../features/user/components/Username";

function Header() {
  return (
    <header className="flex flex-col items-center gap-4 border-b-2 border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:flex-row sm:justify-between sm:gap-0 sm:px-6">
      <Link to="/" className="tracking-[5 px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

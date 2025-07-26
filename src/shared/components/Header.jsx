import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/components/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Mery</p>
    </header>
  );
}

export default Header;

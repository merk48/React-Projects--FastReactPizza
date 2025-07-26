import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../../features/cart/components/CartOverview";
import Main from "./Main";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <CartOverview />
      </Footer>
    </div>
  );
}

export default AppLayout;

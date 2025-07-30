import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import CartOverview from "../../features/cart/components/CartOverview";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
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

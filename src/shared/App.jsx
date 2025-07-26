import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "../features/menu/pages/Menu";
import Cart from "../features/cart/pages/Cart";
import Order from "../features/order/pages/Order";
import CreateOrder from "../features/order/pages/CreateOrder";

//#region Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "/order/:id",
    element: <Order />,
  },
]);
//#endregion

function App() {
  return <RouterProvider router={router} />;
}
export default App;

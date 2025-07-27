import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "../features/menu/pages/Menu";

import Cart from "../features/cart/pages/Cart";
import Order, { loader as orderLoader } from "../features/order/pages/Order";
import CreateOrder, {
  action as createOrderAction,
} from "../features/order/pages/CreateOrder";
import AppLayout from "./Layouts/AppLayout";
import Error from "../shared/components/Error";

//#region Routing
const router = createBrowserRouter([
  {
    element: <AppLayout />, // layout route
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu", // fetch on render route instead of fetch on render
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
//#endregion

function App() {
  return <RouterProvider router={router} />;
}
export default App;

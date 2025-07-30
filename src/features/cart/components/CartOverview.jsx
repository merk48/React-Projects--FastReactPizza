import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalPrice } from "../context/cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalPrice = useSelector(getTotalPrice);

  return (
    totalCartQuantity > 0 && (
      <div className="flex items-center justify-between border-t-2 border-stone-200 bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300">
          <span>{totalCartQuantity} pizzas</span>
          <span>${totalPrice}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    )
  );
}

export default CartOverview;

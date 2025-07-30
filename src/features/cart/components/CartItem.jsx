import { useSelector } from "react-redux";
import { formatCurrency } from "../../../shared/utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "../context/cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const curItemQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const isInCart = curItemQuantity > 0;

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-x-8">
        <p className="text-sm font-bold text-stone-500">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity id={pizzaId} curQuantity={curItemQuantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

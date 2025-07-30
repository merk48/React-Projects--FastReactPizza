import { useDispatch } from "react-redux";
import Button from "../../../shared/components/Button";
import { formatCurrency } from "../../../shared/utils/helpers";
import { deleteItem } from "../context/cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-x-8">
        <p className="text-sm font-bold text-stone-500">
          {formatCurrency(totalPrice)}
        </p>
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;

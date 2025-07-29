import Button from "../../../shared/components/Button";
import { formatCurrency } from "../../../shared/utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-x-8">
        <p className="text-sm font-bold text-stone-500">
          {formatCurrency(totalPrice)}
        </p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;

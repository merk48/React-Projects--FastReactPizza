import { formatCurrency } from "../../../shared/utils/helpers";
import Button from "../../../shared/components/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../cart/context/cartSlice";

function MenuItem({ item }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? "opacity-60 grayscale" : ""}`}>
      <img className="h-24" src={imageUrl} alt={name} />
      <div className="flex grow flex-col pt-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm font-medium uppercase">
            {!soldOut ? formatCurrency(unitPrice) : "Sold out"}
          </p>
          <Button
            type="small"
            className="my-auto"
            disabled={soldOut}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

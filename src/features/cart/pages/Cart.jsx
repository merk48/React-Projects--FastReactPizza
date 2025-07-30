import { useDispatch, useSelector } from "react-redux";
import Button from "../../../shared/components/Button";
import LinkButton from "../../../shared/components/LinkButton";
import CartItem from "../components/CartItem";
import { clearCart, getCart } from "../context/cartSlice";
import { getUsername } from "../../user/context/userSlice";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="my-3 flex flex-col divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="flex justify-between gap-4">
        <Button type="small" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

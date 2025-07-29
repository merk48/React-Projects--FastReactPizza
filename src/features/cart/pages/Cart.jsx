import Button from "../../../shared/components/Button";
import LinkButton from "../../../shared/components/LinkButton";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2>Your cart, %NAME%</h2>

      <div className="flex gap-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="small" className="">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

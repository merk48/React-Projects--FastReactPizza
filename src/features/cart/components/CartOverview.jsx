import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between text-sm uppercase text-stone-200 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

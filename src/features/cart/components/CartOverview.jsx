import { Link } from "react-router-dom";
import LinkButton from "../../../shared/components/LinkButton";
import Button from "../../../shared/components/Button";

function CartOverview() {
  return (
    <div className="flex items-center justify-between text-sm uppercase text-stone-200 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Button to="/cart">Open cart &rarr;</Button>
    </div>
  );
}

export default CartOverview;

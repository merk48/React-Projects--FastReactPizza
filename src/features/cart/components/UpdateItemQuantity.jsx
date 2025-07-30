import { useDispatch } from "react-redux";
import Button from "../../../shared/components/Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../context/cartSlice";

function UpdateItemQuantity({ id, curQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-bold">{curQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;

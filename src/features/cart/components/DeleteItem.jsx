import { useDispatch } from "react-redux";
import Button from "../../../shared/components/Button";
import { deleteItem } from "../context/cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

import LinkButton from "../../../shared/components/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mx-10 my-7 text-center text-sm font-bold text-stone-500 sm:text-base">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;

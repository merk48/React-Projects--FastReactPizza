import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../../services/apiRestaurant";
import FormInput from "../../../shared/components/FormInput";
import Button from "../../../shared/components/Button";
import FormBox from "../../../shared/components/FormBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalPrice,
} from "../../cart/context/cartSlice";
import EmptyCart from "../../cart/components/EmptyCart";
import store from "../../../store";
import { formatCurrency } from "../../../shared/utils/helpers";
import { fetchAddress } from "../../user/context/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const {
    username,
    status: addressStatus,
    position,
    address,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const isSubmitting = navigation.state === "submitting";

  const [withPriority, setWithPriority] = useState(true);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const dispatch = useDispatch();

  console.log(cart);
  console.log(formErrors);

  function handleGetPossion(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">{`Ready to order? Let's go!`}</h2>

      {/* <button onClick={() => dispatch(fetchAddress())}>Get possiosn</button> */}

      <Form method="POST" action="/order/new">
        <FormBox name="customer" label="First Name" errors={formErrors}>
          <FormInput
            type="text"
            name="customer"
            required={true}
            defaultValue={username}
          />
        </FormBox>

        <FormBox name="phone" label="Phone number" errors={formErrors}>
          <FormInput type="tel" name="phone" required={true} />
        </FormBox>

        <FormBox name="address" label="Address" errors={formErrors}>
          <FormInput
            type="text"
            name="address"
            required={true}
            disabled={isLoadingAddress}
            defaultValue={address}
          />
          {!(position.latitude && position.longitude) && (
            <button
              className="absolute bottom-10 right-2 text-xs font-semibold uppercase text-stone-500 underline"
              disabled={isLoadingAddress}
              onClick={handleGetPossion}
            >
              Get possiosn
            </button>
          )}

          {/* <Button
            type="small"
             disabled={isLoadingAddress}
            className="absolute right-0 z-50 text-xs font-semibold text-stone-500"
            onClick={handleGetPossion}
          >
            Get possiosn
          </Button> */}
        </FormBox>

        <div className="mb-12 flex items-center gap-3">
          <input
            className={`h-6 w-6 accent-yellow-400 outline-none transition-all duration-300 ${withPriority ? "focus:ring focus:ring-yellow-400 focus:ring-offset-2" : ""} `}
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
        {/* <div className="mb-4">
          {formErrors?.exception && (
            <span className="ml-auto rounded-md bg-red-100 px-1 text-xs font-semibold text-red-700 sm:text-sm">
              {formErrors?.exception ?? "Failed to fetch"} &uarr;
            </span>
          )}
        </div> */}
      </Form>
    </div>
  );
}

// action will called when submit the form
async function action({ request }) {
  const errors = {};

  try {
    // extract data from form
    const data = Object.fromEntries(await request.formData());

    const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority,
      // priority: data.priority === 'true',
    };
    console.log("order " + order);
    // validations
    if (!isValidPhone(order.phone))
      errors.phone =
        "Please give us your correct phone number. We might need it to contatct you.";

    if (Object.keys(errors).length > 0) return errors;

    const newOrder = await createOrder(order);
    console.log("newOrder " + newOrder);

    // This will be replaced later (bad for performance)
    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
  } catch (err) {
    errors.exception = err;
    console.error(err);
    return errors;
  }
}

export { action };
export default CreateOrder;

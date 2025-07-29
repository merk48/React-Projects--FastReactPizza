import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../../services/apiRestaurant";
import FormInput from "../../../shared/components/FormInput";
import Button from "../../../shared/components/Button";
import FormBox from "../../../shared/components/FormBox";
import { useState } from "react";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const navigation = useNavigation();
  const username = useSelector((state) => state.user.username);
  const isSubmitting = navigation.state === "submitting";

  const [withPriority, setWithPriority] = useState(true);
  const formErrors = useActionData();
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">{`Ready to order? Let's go!`}</h2>

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
          <FormInput type="text" name="address" required={true} />
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
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
        {/* <div className="mb-4">
          {formErrors?.exception && (
            <span className="ml-auto rounded-md bg-red-100 px-1 text-xs font-semibold text-red-700 sm:text-sm">
              ${formErrors.exception} &uarr;
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
    };

    // validations
    if (!isValidPhone(order.phone))
      errors.phone =
        "Please give us your correct phone number. We might need it to contatct you.";

    if (Object.keys(errors).length > 0) return errors;

    const newOrder = await createOrder(order);

    return redirect(`/order/${newOrder.id}`);
  } catch (err) {
    errors.exception = err;
    console.error(err);
    return errors;
  }
}

export { action };
export default CreateOrder;

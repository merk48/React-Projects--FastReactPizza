import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../../services/apiRestaurant";
import FormInput from "../../../shared/components/FormInput";
import Button from "../../../shared/components/Button";

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
  // const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  console.log(formErrors);

  const cart = fakeCart;
  return (
    <div>
      <h2>{`Ready to order? Let's go!`}</h2>

      <Form method="POST" action="/order/new">
        <FormInput
          type="text"
          name="customer"
          label="First Name"
          required={true}
          errors={formErrors}
        />
        <FormInput
          type="tel"
          name="phone"
          label="Phone number"
          required={true}
          errors={formErrors}
        />
        <FormInput
          type="text"
          name="address"
          label="Address"
          required={true}
          errors={formErrors}
        />
        <div>
          <input
            className="h-6 w-6 accent-yellow-400 outline-none transition-all duration-300 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
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
      priority: data.priority === "on",
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
    return errors;
  }
}

export { action };
export default CreateOrder;

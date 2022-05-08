import { loadStripe } from "@stripe/stripe-js";

let strpePromise;
const getStripe = () => {
  if (!strpePromise) {
    strpePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY);
  }
  return strpePromise;
};

export default getStripe;


/*      Payment.     */

// Setup.
import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import CheckoutProduct from "./CheckoutProduct";

// Stripe.
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Styles.
import "../styles/Payment.css";
import { getBasketTotal } from "../reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  // Hooks.
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  // Stripe variables.
  const stripe = useStripe();
  const elements = useElements();

  // componentDidUpdate.
  useEffect(() => {
    const getClientSecrect = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecrect();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.comfirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Delivery address. */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Inser the address here</p>
            <p>Hamburg, Germany (This is hard coded)</p>
          </div>
        </div>

        {/* Review items. */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment method. */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>

          <div className="payment__details">
            {/* STRIPE MAGIC GOES HERE */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Error. */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

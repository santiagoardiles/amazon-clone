/* Checkout. */

// Setup.
import React from "react";
import Subtotal from "./Subtotal";

// Styles.
import "../styles/Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://i.imgur.com/8Wje1hr.jpg" />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

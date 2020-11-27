import React from "react";

import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>

        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="product__rating">
          <p>🌟️</p>
          <p>🌟️</p>
          <p>🌟️</p>
          <p>🌟️</p>
          <p>🌟️</p>
        </div>
      </div>

      <img src="https://i.imgur.com/Uw4CTiN.jpgf" alt="" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;

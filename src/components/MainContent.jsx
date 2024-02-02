import React, { useState } from "react";
import iconCart from "../images/icon-cart.svg";
const MainContent = ({ productsInCart, setProductInCart }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <main>
      <p className="company-name">sneaker company</p>
      <h1 className="product-title">fall limited edition sneakers</h1>
      <p className="product-desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-price">
        <p className="price">$125.00</p>
        <p className="discount">50%</p>
        <p className="old-price">$250</p>
      </div>
      <div className="cart-qty">
        <div className="item-num-container">
          <button onClick={handleIncrement}>-</button>
          <div className="item-num">{count}</div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            setProductInCart(count);
          }}
          className="add-to-cart"
        >
          <img className="icon-cart" src={iconCart} />
          <div>Add to cart</div>
        </button>
      </div>
    </main>
  );
};

export default MainContent;

import product from "./product";
import deleteIcon from "../images/icon-delete.svg";

const Cart = ({
  isCartOpen,
  setIsCartOpen,
  productsInCart,
  setProductInCart,
}) => {
  if (!isCartOpen) {
    return null;
  }
  return (
    <div>
      {productsInCart === 0 && (
        <div onClick={() => setIsCartOpen(false)} className="cart-backdrop">
          <div onClick={(e) => e.stopPropagation()} className="cart-container">
            <div className="cart-title">Cart</div>
            <div className="separate-line"></div>
            <div className="cart-content">Your cart is empty</div>
          </div>
        </div>
      )}
      {productsInCart > 0 && (
        <div onClick={() => setIsCartOpen(false)} className="cart-backdrop">
          <div onClick={(e) => e.stopPropagation()} className="cart-container">
            <div className="cart-title">Cart</div>
            <div className="separate-line"></div>
            <div className="added-to-cart">
              <div className="cart-content">
                <div className="img-discrp">
                  <img
                    className="selected-product-cart"
                    src={product.thambnail}
                    alt="thambnail"
                  />
                  <div className="product-data">
                    <div>{product.title}</div>
                    <img
                      onClick={() => {
                        setProductInCart(0);
                      }}
                      className="delete-icon"
                      src={deleteIcon}
                      alt="remove-icon"
                    />

                    <div className="product-pricing">
                      <div>${product.price}</div>
                      <div className="total-price">
                        {`  x ${productsInCart} $${(
                          product.price * productsInCart
                        ).toFixed(2)} `}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

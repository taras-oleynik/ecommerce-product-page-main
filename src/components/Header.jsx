import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import { useState } from "react";
import avatar from "../images/image-avatar.png";
import Mobile from "./Nav";
import Cart from "./Cart";

const Header = ({ productsInCart, setProductInCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const mobileMenu = () => {
    setIsOpen(true);
  };
  const cartMenu = () => {
    setIsCartOpen(true);
  };
  return (
    <>
      <header>
        <Cart
          productsInCart={productsInCart}
          setProductInCart={setProductInCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="menu-logo">
          <img className="menu" onClick={mobileMenu} src={menu} alt="menu" />
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="cart-icon-contaner">
          <img
            className="cart-menu-item"
            onClick={cartMenu}
            src={cart}
            alt="cart"
          />
          {productsInCart > 0 && (
            <div className="item-count">{productsInCart}</div>
          )}
        </div>

        <img className="avatar" src={avatar} alt="avatar" />
        {/* <div className="cart-avatar">
         
         
        </div> */}
      </header>
    </>
  );
};

export default Header;

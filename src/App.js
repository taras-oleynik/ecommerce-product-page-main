import logo from "./logo.svg";
import Header from "./components/Header";
import MainImg from "./components/MainImg";
import MainContent from "./components/MainContent";
import { useState } from "react";

function App() {
  const [productsInCart, setProductInCart] = useState(0);
  return (
    <>
      <Header
        productsInCart={productsInCart}
        setProductInCart={setProductInCart}
      />

      <div className="main">
        <MainImg />
      </div>
      <MainContent
        productsInCart={productsInCart}
        setProductInCart={setProductInCart}
      />
    </>
  );
}

export default App;

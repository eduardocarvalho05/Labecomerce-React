import React, { useState } from "react";
import { Header } from "./components/Header/01-HeaderJS/Header";
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"
import { createGlobalStyle } from "styled-components"; // Importe createGlobalStyle

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const App = () => {

  const [carrinho, setCarrinho] = useState([])
  // console.log(carrinho)

  return (
    <>
      <GlobalStyle />
      <Header
        carrinho={carrinho}
        setCarrinho={setCarrinho}
      />
      <Main
        carrinho={carrinho}
        setCarrinho={setCarrinho}
      />
      <Footer />
    </>
  );
};

import React, { useState } from "react";
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { CartItem } from "./CartItem/CartItem"

export const Menu = styled.div`
  background-color: rgba(38, 5, 81, 0.8); 
  position: fixed;
  height: 80%;
  top: 14%;
  right: 0px;
  width: 300px;
  animation: showSidebar 0.4s;
  overflow-y: auto;

  h4{
    text-align: start;
    color: white;
    padding: 12px 20px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
  top: 14%;
  }
  
  @media only screen and (max-width: 480px) {
    top: 14%;
  }

`;

const MenuDireita = styled.button`
  padding: 6px;
  color: white;
  background-color: #260551;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  position: relative;
  
  span{
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    position: absolute;
    top: 0;
    left: 53%;
    width: 18px;
    height: 18px;
    background-color:  #007bff;
    border-radius: 50%;
    color: white;
    visibility: hidden;
    opacity: 0;
    transition: all ease-in-out 300ms;
    &.active{
      visibility: visible;
      opacity: 1;
    }
  }
  &:hover {
    background-color: #007bff; 
  }

  p{
    color: white;
  }

  @media only screen and (max-width: 480px) {
    p{
      display: none;
    }
    }
    @media only screen and (min-width: 480px) and (max-width: 768px) {
    p{
      display: none;
    } 
    }
`;

const IconeCarrinho = styled(FaShoppingCart)`
  font-size: 22px;
  color: white;
`;

export const CarrinhoDeCompras = (props) => {
  const [abreBurguer, setAbreBurguer] = useState(false);
  const toggleCarrinho = () => {
    setAbreBurguer(!abreBurguer);
  }

  const totalCart = props.carrinho.reduce((acumulador, item) => (item.preco * item.quantidade) + acumulador, 0);

  return (
    <>
      <MenuDireita className={abreBurguer ? 'active' : ''} onClick={toggleCarrinho}>
        <IconeCarrinho />
        <span className={props.carrinho.length > 0 ? "active" : ""}>{props.carrinho.length}</span>
        <p>Carrinho de Compras</p>
      </MenuDireita>
      {abreBurguer && (<Menu>
        {/* Renderize o CardItem aqui */}
        <CartItem
          key={props.item}
          carrinho={props.carrinho}
          setCarrinho={props.setCarrinho}
        />
        <h4>Resumo carrinho:</h4>
        <h4>Total: R$ {totalCart.toFixed(2)}</h4>
      </Menu>)}
    </>
  );
}

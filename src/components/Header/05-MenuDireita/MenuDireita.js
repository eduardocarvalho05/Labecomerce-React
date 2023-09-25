import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { CartItem } from "./CartItem/CartItem"

export const Menu = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: start;
  background-color: rgba(38, 5, 81, 0.8); 
  position: fixed;
  height: 54%;
  top: 14%;
  right: 0px;
  width: 300px;
  animation: showSidebar 0.4s;
  overflow-y: auto;
  padding: 10px;
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

const ComprarButton = styled.button`
  margin-left: 16px; 
  background-color: #007bff; 
  color: #fff; 
  padding: 10px; 
  border: none; 
  border-radius: 4px; 
  font-size: 16px; 
  width: 160px;
  cursor: pointer; 
  &:hover {
    background-color: #0056b3; 
  }

  &:disabled {
    background-color: #ccc; /* Cor de fundo quando o botão está desativado */
    cursor: not-allowed; /* Cursor de não permitido quando o botão está desativado */
  }
`;

export const CarrinhoDeCompras = (props) => {
  const [abreBurguer, setAbreBurguer] = useState(false);

  const toggleCarrinho = () => {
    setAbreBurguer(!abreBurguer);
  }

  const totalCart = props.carrinho.reduce((acumulador, item) => (item.preco * item.quantidade) + acumulador, 0); 

  // Função para salvar os dados no Local Storage
  const salvarNoLocalStorage = (carrinho) => {
    const carrinhoEmString = JSON.stringify(carrinho);
    localStorage.setItem('carrinho', carrinhoEmString);
    console.log(carrinhoEmString)
  }

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      const carrinho = JSON.parse(carrinhoSalvo);
      props.setCarrinho(carrinho);
    }
  }, []); // Isso garante que o código seja executado apenas uma vez, quando o componente é montado.


  const guardarDados = () => {
    // Primeiro, atualize o estado do carrinho com os dados mais recentes
    props.setCarrinho([...props.carrinho]);
    // Em seguida, salve os dados no Local Storage
    salvarNoLocalStorage(props.carrinho);

    alert("Obrigado por comprar na SpaceKids, agora você será direcionado para forma de pagamento, obrigado!")
  }


  return (
    <>
      <MenuDireita className={abreBurguer ? 'active' : ''} onClick={toggleCarrinho}>
        <IconeCarrinho />
        <span className={props.carrinho.length > 0 ? "active" : ""}>{props.carrinho.length}</span>
        <p>Carrinho de Compras</p>
      </MenuDireita>
      {abreBurguer && (
        <Menu>
          {/* Renderize o CardItem aqui */}
          <CartItem
            key={props.item}
            carrinho={props.carrinho}
            setCarrinho={props.setCarrinho}
          />
          <h4>Resumo carrinho:</h4>
          <h4>Total: R$ {totalCart.toFixed(2)}</h4>
          <ComprarButton onClick={guardarDados}>Confirmar Compra</ComprarButton>
        </Menu>
      )}
    </>
  );
}
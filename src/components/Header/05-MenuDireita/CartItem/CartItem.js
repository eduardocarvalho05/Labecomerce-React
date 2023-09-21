import React, { useState } from "react";
import styled from 'styled-components';
import { BsCartDash } from 'react-icons/bs';

export const CartContainer = styled.div`
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    position: relative;
    img{
        padding: 10px;
        height: 70px;
        width: 90px;
    }
    p{
        font-size: 1rem;
        padding: 6px;
    }
`

const RemoveItem = styled(BsCartDash)`
  font-size: 1.6rem;
  color: white;
  position: absolute;
  top: 40px;
  right: 10px;
  cursor: pointer;
`;


export const CartItem = (props) => {

    const excluirCard = (produto) => {
        let produtos = [...props.carrinho];
        const index = produtos.findIndex(item => item.id === produto.id);

        if (index !== -1) {
            // Se o produto existe no carrinho
            if (produtos[index].quantidade > 1) {
                // Se a quantidade for maior que 1, diminua apenas 1
                produtos[index].quantidade -= 1;
            } else {
                // Se a quantidade for igual a 1, remova o produto completamente
                produtos.splice(index, 1);
            }
            props.setCarrinho(produtos);
        }
    }

    return (
        <>
            {props.carrinho.map(item => (
                <CartContainer key={item.id}>
                    <img src={item.imagem} alt="Imagem do produto" />
                    <div>
                        <p>{item.titulo}</p>
                        <p>Quantidade: {item.quantidade}</p>
                        <p>Preço: {item.preco}</p>

                        <RemoveItem onClick={() => excluirCard(item)} />
                    </div>
                </CartContainer>
            ))}
        </>
    );
}

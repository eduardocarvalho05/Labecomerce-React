import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #007bff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    height: 420px;
    width: 300px;
    gap: 8px;
    transition: transform 0.2s ease;
    position: relative;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    img {
        width: 100%;
        height: 64%;
        border-radius: 10px;
        object-fit: cover;
    }

    h1 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0;
        color: white;
    }

    button {
        width: 90%;
        background-color: orange;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: auto; /* Isso alinha os botões na parte inferior */
    }

    button:hover {
        background-color: #b53471;
    }

    span{
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: black;
          left: -10px;
          top: -5px;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
`;

const CardDescription = styled.p`
    color: white;
    font-size: 1rem;
    text-align: center;
`;

const CardPrice = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: orange;
    font-weight: bold;
`;

function CardProdutos({ item, carrinho, setCarrinho }) {

    const addCard = (produto) => {
        const index = carrinho.findIndex((item) => item.id === produto.id);
    
        if (index !== -1) {
            // Se o produto já estiver no carrinho, aumente a quantidade
            const carrinhoAtualizado = [...carrinho];
            carrinhoAtualizado[index].quantidade += 1;
            setCarrinho(carrinhoAtualizado);
        } else {
            // Caso contrário, adicione o novo produto ao carrinho
            const carrinhoAtualizado = [...carrinho, { ...produto, quantidade: 1 }];
            setCarrinho(carrinhoAtualizado);
        }
    };
    
    return (
        <>
            {item.map((produto) => (
                <div key={produto.id}>
                    <CardContainer>
                        <img src={produto.imagem} alt={produto.titulo} />
                        <h1>{produto.titulo}</h1>
                        <CardDescription>{produto.descricao}</CardDescription>
                        <CardPrice>Preço: R$ {produto.preco.toFixed(2)}</CardPrice>
                        <button onClick={() => addCard(produto)}>Adicionar ao carrinho</button>
                    </CardContainer>
                </div>
            ))}
        </>
    );
}

export default CardProdutos;

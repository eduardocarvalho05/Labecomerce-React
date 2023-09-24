import React, { useState } from 'react';
import styled from 'styled-components';
import { FakeApi } from '../../../services/FAKE API/Produtos/FakeApi';
import CardProdutos from './CardProdutos/CardProdutos';

const CardContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: auto;
   width: 100%;
`;

const FiltroDiv = styled.section`
    width: 99%;
    height: 14vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(38, 5, 81, 0.1);
    border-radius: 16px;
    color: white;
    padding: 40px;
    gap: 12px;
    margin: 10px;
    margin-right: 20px;
    margin-left: 20px;
    h1 {
        color: #007bff;
        font-weight: bold;
        font-size: 1.6rem;
    }

    input{
        height: 50px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border: 2px solid #007bff; 
        border-radius: 8px; 
        padding: 8px; 
        font-size: 1rem;
    }

    select {
        margin: 0 10px;
        padding: 10px 16px;
        font-size: 1rem;
        font-weight: bold;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    select:hover {
        background-color: #B53471;
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 34vh;
        select {
            padding: 10px 10px;
            margin-top: 6px; /* Adiciona uma margem superior para separar os selects */
        }
    }

    @media only screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        height: 30vh;
        h1 {
            font-size: 1.4rem;
        }
    
        select {
            font-size: 0.8rem;
        }

        input{
            font-size: 0.8rem;
        }
    }
`;

const ProdutosDiv = styled.section`
    min-height: 60vh;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 20px 100px;
`;

const Produtos = (props) => {
    const [minFilter, setMinFilter] = useState();
    const [maxFilter, setMaxFilter] = useState();
    const [tituloFilter, setTituloFilter] = useState("")
    const [categoria, setCategoria] = useState("TodosProdutos")
    const [ordenacao, setOrdenacao] = useState("TodosProdutos")

    const produtosFiltrados = FakeApi
        .filter((item) => { // FILTRA PRECO MINIMO
            if (minFilter > 0) {
                return item.preco >= minFilter;
            } else {
                return true; // Mostrar todos os produtos quando os campos de filtro estiverem vazios ou undefined
            }
        })
        .filter((item) => { // FILTRA PRECO MAXIMO
            if (maxFilter > 0) {
                return item.preco <= maxFilter;
            } else {
                return true;
            }
        })
        .filter((produto) => {// FILTRA POR TITULO
            return produto.titulo.toLowerCase().includes(tituloFilter.toLowerCase());
        })
        .filter((item) => {//FILTRA POR CATEGORIA
            if (categoria !== "TodosProdutos") {
                return item.categoria === categoria
            } else {
                return FakeApi
            }
        })
        .sort((a, b) => {
            if (ordenacao === "menor") {
                return a.preco - b.preco; // Ordenar em ordem crescente de preço
            } else if (ordenacao === "maior") {
                return b.preco - a.preco; // Ordenar em ordem decrescente de preço
            } else {
                return 0; // Não realizar nenhuma ordenação
            }
        }); // ORDENAÇÃO

    return (
        <CardContainer>
            <FiltroDiv>
                <h1>Filtrar por:</h1>

                <input
                    type="text"
                    placeholder="Buscar por nome..."
                    value={tituloFilter} // Associe o valor do input ao estado tituloFilter
                    onChange={(e) => setTituloFilter(e.target.value)} // Atualize o estado tituloFilter ao digitar no input
                />

                <input
                    type="number"
                    placeholder="Preço mínimo..."
                    value={minFilter}
                    onChange={(e) => setMinFilter(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço máximo..."
                    value={maxFilter}
                    onChange={(e) => setMaxFilter(e.target.value)}
                />
                <div className='divButton'>
                    <select
                        onChange={(e) => {
                            setOrdenacao(e.target.value);
                        }}
                        value={ordenacao}
                    >
                        <option value="TodosProdutos">Preço: Todos</option>
                        <option value="menor">Preço: Menor para Maior</option>
                        <option value="maior">Preço: Maior para Menor</option>
                    </select>

                    <select
                        onChange={(e) => setCategoria(e.target.value)}
                        value={categoria}
                    >
                        <option value="TodosProdutos">Mostrar Todos</option>
                        <option value="Brinquedos">Brinquedos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Lego">Lego</option>
                    </select>
                </div>

            </FiltroDiv>
            <ProdutosDiv>
                {/* Renderizar produtosFiltrados em vez de produtosListados */}
                <CardProdutos
                    item={produtosFiltrados}
                    carrinho={props.carrinho}
                    setCarrinho={props.setCarrinho}
                />
            </ProdutosDiv>
        </CardContainer>
    );
};

export default Produtos;
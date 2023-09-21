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
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: white;
    padding: 28px;
    gap: 12px;
    
    h1 {
        color: black;
        font-weight: bold;
        font-size: 1.6rem;
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
        select {
            padding: 10px 10px;
            margin-top: 6px; /* Adiciona uma margem superior para separar os selects */
        }
    }

    @media only screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        height: 26vh;
        h1 {
            font-size: 1.4rem;
        }
    
        select {
            font-size: 0.6rem;
            margin-top: 6px; /* Adiciona uma margem superior para separar os selects */
        }
    }
`;

const SearchContainer = styled.div`
  height: 50px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 2px solid #007bff; 
  border-radius: 8px; 
  padding: 8px;

  input {
    flex: 1;
    padding: 8px;
    height: 38px;
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }

  @media only screen and (max-width: 480px){
    height: 60px; /* Aumenta a altura */
    margin-top: 16px; /* Adiciona uma margem superior */
    gap: 8px; /* Aumenta o espaçamento entre os elementos */
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
    padding: 16px 100px;
`;

const Produtos = (props) => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
    const [precoSelecionado, setPrecoSelecionado] = useState('todos');
    const [termoPesquisa, setTermoPesquisa] = useState(''); // Novo estado para o termo de pesquisa
    const [itensFiltrados, setItensFiltrados] = useState(FakeApi);

    const filtrarPorCategoria = (categoria) => {
        if (categoria === 'todos') {
            setItensFiltrados(FakeApi);
            setPrecoSelecionado('todos'); // Limpar seleção de preço ao mudar de categoria
        } else {
            const produtosFiltrados = FakeApi.filter((produto) => produto.categoria === categoria);
            setItensFiltrados(produtosFiltrados);
        }
        setCategoriaSelecionada(categoria);
    };

    const filtrarPorPreco = (preco) => {
        if (preco === 'todos') {
            setItensFiltrados(FakeApi);
        } else if (preco === 'menor') {
            const produtosFiltrados = itensFiltrados.slice().sort((a, b) => a.preco - b.preco);
            setItensFiltrados(produtosFiltrados);
        } else if (preco === 'maior') {
            const produtosFiltrados = itensFiltrados.slice().sort((a, b) => b.preco - a.preco);
            setItensFiltrados(produtosFiltrados);
        }
        setPrecoSelecionado(preco);
    };

    const filtrarPorTitulo = (termo) => {
        let produtosFiltrados;

        if (categoriaSelecionada !== 'todos') {
            // Se uma categoria específica estiver selecionada,
            // filtrar apenas dentro dessa categoria
            produtosFiltrados = FakeApi.filter((produto) =>
                produto.titulo.toLowerCase().includes(termo.toLowerCase()) &&
                produto.categoria === categoriaSelecionada
            );
        } else {
            // Caso contrário, pesquisar em todos os produtos
            produtosFiltrados = FakeApi.filter((produto) =>
                produto.titulo.toLowerCase().includes(termo.toLowerCase())
            );
        }

        setItensFiltrados(produtosFiltrados);
        setTermoPesquisa(termo);
    };


    return (
        <CardContainer>
            <FiltroDiv>
                <h1>Nossos produtos:</h1>
                <SearchContainer>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={termoPesquisa}
                        onChange={(e) => {
                            setTermoPesquisa(e.target.value);
                            filtrarPorTitulo(e.target.value);
                        }}
                    />

                </SearchContainer>

                <div className='divButton'>
                    <select
                        onChange={(e) => {
                            filtrarPorCategoria(e.target.value);
                        }}
                        value={categoriaSelecionada}
                    >
                        <option value="todos">Mostrar Todos</option>
                        <option value="Brinquedos">Brinquedos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Lego">Lego</option>
                    </select>
                    <select
                        onChange={(e) => {
                            filtrarPorPreco(e.target.value);
                        }}
                        value={categoriaSelecionada === 'Brinquedos' ? precoSelecionado : 'todos'}
                    >
                        <option value="todos">Preço: Todos</option>
                        <option value="menor">Preço: Menor para Maior</option>
                        <option value="maior">Preço: Maior para Menor</option>
                    </select>
                </div>
            </FiltroDiv>
            <ProdutosDiv>
                <CardProdutos
                    item={itensFiltrados}
                    carrinho={props.carrinho}
                    setCarrinho={props.setCarrinho}
                />
            </ProdutosDiv>
        </CardContainer>
    );
};

export default Produtos;




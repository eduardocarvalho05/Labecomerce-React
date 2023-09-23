import React, { useState, useEffect } from 'react';
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
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
    const [precoSelecionado, setPrecoSelecionado] = useState('todos');
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [itensFiltrados, setItensFiltrados] = useState(FakeApi);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const filtrarPorTitulo = (termo) => {
        setTermoPesquisa(termo);

        const produtosFiltrados = FakeApi.filter((produto) =>
            produto.titulo.toLowerCase().includes(termo.toLowerCase())
        );

        if (categoriaSelecionada !== 'todos') {
            setItensFiltrados(produtosFiltrados.filter((produto) => produto.categoria === categoriaSelecionada));
        } else {
            setItensFiltrados(produtosFiltrados);
        }
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

    const filtrarPorCategoria = (categoria) => {
        setCategoriaSelecionada(categoria);

        if (categoria === 'todos') {
            if (termoPesquisa.trim() === '') {
                setItensFiltrados(FakeApi);
            } else {
                setItensFiltrados(FakeApi.filter((produto) => produto.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())));
            }
        } else {
            const produtosFiltrados = FakeApi.filter((produto) => produto.categoria === categoria);
            setItensFiltrados(produtosFiltrados);
        }
    };

    const filtrarPorPrecoMinMax = () => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        // Verifique se pelo menos um dos campos de preço possui um valor válido
        if (!isNaN(min) || !isNaN(max)) {
            const produtosFiltrados = FakeApi.filter((produto) => {
                const preco = parseFloat(produto.preco);
                return (isNaN(min) || preco >= min) && (isNaN(max) || preco <= max);
            });

            setItensFiltrados(produtosFiltrados);
        } else {
            // Se ambos os campos estiverem vazios, volte para o FakeApi
            setItensFiltrados(FakeApi);
        }
    };

    useEffect(() => {
        filtrarPorPrecoMinMax();
    }, [minPrice, maxPrice]);

    return (
        <CardContainer>
            <FiltroDiv>
                <h1>Filtrar por:</h1>

                <input
                    type="text"
                    placeholder="Buscar por nome..."
                    value={termoPesquisa}
                    onChange={(e) => filtrarPorTitulo(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço mínimo..."
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço máximo..."
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <div className='divButton'>
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

                    <select
                        onChange={(e) => filtrarPorCategoria(e.target.value)}
                        value={categoriaSelecionada}
                    >
                        <option value="todos">Mostrar Todos</option>
                        <option value="Brinquedos">Brinquedos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Lego">Lego</option>
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
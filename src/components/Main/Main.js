import React from 'react'
import Banner from './Banner/Banner'
import Produtos from './Produtos/Produtos'

export const Main = (props) => {

    return (
        <>
            <Banner />
            < Produtos
                carrinho={props.carrinho}
                setCarrinho={props.setCarrinho}
            />
        </>
    )
}


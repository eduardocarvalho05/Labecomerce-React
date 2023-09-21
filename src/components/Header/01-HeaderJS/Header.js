import { Cabecalho } from './HeaderStyled';
import { Logo } from "../03-Logo/Logo";
import { MenuEsquerda } from "../02-MenuEsquerda/HamburguerEsquerda/MenuEsquerda"
import { CarrinhoDeCompras } from "../05-MenuDireita/MenuDireita"

export const Header = (props) => {

    return (
        <>
            <Cabecalho>
                <MenuEsquerda />
                <Logo />
                <CarrinhoDeCompras
                    carrinho={props.carrinho}
                    setCarrinho={props.setCarrinho}
                />
            </Cabecalho>
        </>
    )
}
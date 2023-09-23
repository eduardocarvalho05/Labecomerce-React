import React from 'react';
import styled from 'styled-components';
import Logo from "../../assets-img/Logo/Logo.png"
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const ContainerFooter = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: #260551;
    color: white;
    font-size: 1rem;
    line-height: 1.8;
    padding: 40px 20px;
    gap: 10px;
    
    img{
        height: 112px;
        width: 112px;
    }

    .TextoFooter{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
        height: 40vh;
        flex-direction: column;

        img{
        height: 90px;
        width: 90px;
        }

        .TextoFooter{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 480px){
        height: 54vh;
        flex-direction: column;

        img{
        height: 80px;
        width: 80px;
        }

        .TextoFooter{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
`;

const RedesSocias = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
    p {
        margin-bottom: 10px;
    }

    .social-icons {
        display: flex;
        align-items: center;
        gap: 18px;
        
        a {
            text-decoration: none;
            color: white;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.2); /* Aumenta o tamanho do ícone ao passar o mouse */
            }
        }
        
        svg {
            font-size: 32px; /* Aumente o tamanho dos ícones */
        }
    }
`;

export const Footer = () => {
    return (
        <ContainerFooter>
            <img src={Logo} alt="Logo empresa Space Kids" />
            <div className='TextoFooter'>
                <p>Space Kids - Loja de Brinquedos Espaciais para Crianças </p>
                <p>CNPJ: 123.456.789/0001-00</p>
                <p>Avenida Espacial, 1234 - Galáxia Feliz, Lua - Espaço Sideral</p>
                <p>Preços e condições sujeitos a alterações. Consulte nosso site para mais detalhes.</p>
                <p>Made with ❤️ by Space Kids</p>
            </div>
            <RedesSocias>
                <p>Siga-nos nas redes sociais</p>
                <div className="social-icons">
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <BsFacebook />
                    </a>
                </div>
            </RedesSocias>
        </ContainerFooter>
    );
};

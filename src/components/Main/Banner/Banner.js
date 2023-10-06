import React from 'react';
import { styled } from 'styled-components';
import BannerIMG from "../../../assets-img/Logo/MainFoto.webp";

export const BannerContainer = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .imageBanner {
    height: 100%;
    width: 50%;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .textoBanner {
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    height: 100%;
    width: 50%;
    flex: 1;
    padding: 100px 40px;
    background: linear-gradient(to bottom, #0d1630, #0d1670);
    color: white;
    gap: 40px;
    overflow-y: auto;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

    @media only screen and (min-width: 1025px){
    .textoBanner{
        overflow-y: auto;
        h2 {
            font-size: 2rem; 
        }
        p {
            font-size: 1.5rem; 
            line-height: 1.5; /* Espaçamento entre linhas para melhor legibilidade */
        }    
    }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px){
        .imageBanner{
        width: 50%;
        height: 100%;
    }

        .textoBanner{
        flex: 1;
        overflow-y: auto;
        width: 50%;
        gap: 60px;
        height: 100%;
        h2 {
            font-size: 1.5rem; 
        }
        p {
            font-size: 1.2rem; 
            line-height: 1.5; /* Espaçamento entre linhas para melhor legibilidade */
        } 
        }
    }
    @media only screen and (min-width: 480px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 100vh;
        .imageBanner{
            width: 100%;
            height: 50%;
        }
        .textoBanner{
            width: 100%;
            height: 50%;
            overflow-y: auto;
            gap: 10px;
            h2 {
            font-size: 1.2rem; 
        }
        p {
            font-size: 1.2rem; 
            line-height: 1.5; /* Espaçamento entre linhas para melhor legibilidade */
        } 
        }
    }
    @media only screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        height: 90vh;
        
        .imageBanner{
            width: 100%;
            height: 50%;
        }
        .textoBanner{
            width: 100%;
            height: 50%;
            overflow-y: auto;
            gap: 10px;
            padding: 20px;
            h2 {
            font-size: 0.8rem; 
        }
        p {
            font-size: 0.8rem; 
            line-height: 1.5; /* Espaçamento entre linhas para melhor legibilidade */
        } 
        }
        }
`;

export const Banner = () => {
    return (
        <>
            <BannerContainer>
                <div className="imageBanner">
                    <img src={BannerIMG} alt="Banner Main" />
                </div>
                <div className='textoBanner'>
                    <h2>
                        Explore o Espaço Infinito com a Space Kids: O Lugar dos Sonhos para Pequenos Astronautas
                    </h2>
                    <p>
                        Bem-vindo à Space Kids, o seu portal para aventuras espaciais sem limites! Aqui, no coração do universo da imaginação, transformamos cada dia em uma jornada emocionante pelo cosmos. Seja bem-vindo a um mundo de brinquedos espaciais infantis que vai fazer os olhos dos seus pequenos astronautas brilharem.
                    </p>
                    <p>
                        Em nossa loja espacial, você encontrará uma vasta gama de brinquedos e produtos que estimulam a criatividade, o aprendizado e a diversão. Comandando naves intergalácticas, explorando planetas distantes e fazendo novos amigos extraterrestres, as crianças podem desfrutar de experiências que alimentam a imaginação e incentivam o desenvolvimento.
                    </p>
                </div>
            </BannerContainer>
        </>
    );
}

export default Banner;


//
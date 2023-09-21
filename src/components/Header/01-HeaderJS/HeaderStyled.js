import { styled } from "styled-components";

export const Cabecalho = styled.header`
    width: 100%;
    height: 14vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #260551;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);

    @media only screen and (min-width: 480px) and (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        height: 14vh;
    }

    @media only screen and (max-width: 480px) {
        display: flex;
        justify-content: space-around;
        height: 14vh;
    }

`;
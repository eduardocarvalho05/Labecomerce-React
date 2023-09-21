import { styled } from "styled-components";
import logo from "../../../assets-img/Logo/Logo.png"

export const ContainerIMG = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

        img{
            display: block;
            width: 100%;
        }

    @media only screen and (min-width: 480px) and (max-width: 768px) {
        img{
            /* height: 60%;
            margin-bottom: 70px; */
        }
    }

    @media only screen and (max-width: 480px) {
            img{
            /* height: 60%;
            margin-bottom: 60px; */
        }
    }
`;

export const Logo = () => {
    return (
        <>
            <ContainerIMG>
                <img src={logo} alt="Logo Do site" />
            </ContainerIMG>
        </>
    )
}
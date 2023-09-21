import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from '../SideBar/SideBar';

export const Menu = styled.h1`
  /* background-color: blue; */
  background-color: #260551;
  color: white;
  width: 40px;
  height: 40%;
  margin-top: 20px;
  margin-left: 32px;
  cursor: pointer;
  
    @media only screen and (min-width: 480px) and (max-width: 768px) {
    }

    @media only screen and (max-width: 480px) {
    }
`;

export const MenuEsquerda = () => {
    const [sideBar, setSideBar] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setSideBar(!sideBar);
        setIsMenuOpen(false);
    };

    return (
        <Menu>
            {isMenuOpen ? (<FaTimes onClick={toggleMenu} />)
                :
                (<FaBars onClick={toggleMenu} />)}
            {sideBar && <Sidebar active={setSideBar} />}
        </Menu>
    );
};



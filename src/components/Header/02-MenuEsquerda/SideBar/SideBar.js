import React from 'react';
import styled from 'styled-components';
import SidebarItem from '../SiderBarItem/SideBarItem';
import {
    FaHome,
    FaUserAlt,
    FaIdCardAlt,
    FaRegFileAlt,
} from 'react-icons/fa'

export const SideBarContainer = styled.div`
  /* background-color: blue; */
  background-color: rgba(38, 5, 81, 0.8); 
  position: fixed;
  height: 54%;
  top: 14%;
  left: 0px;
  width: 300px;
  animation: showSidebar 0.4s;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 60px;
  
  
  @media only screen and (min-width: 480px) and (max-width: 768px) {
  top: 14%;
  }
  
  @media only screen and (max-width: 480px) {
    top: 14%;
  }
`;


const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(true)
    }

    return (
        <SideBarContainer onClick={closeSidebar}>
            <SidebarItem Icon={FaHome} Text="Home" />
            <SidebarItem Icon={FaUserAlt} Text="Sobre" />
            <SidebarItem Icon={FaIdCardAlt} Text="Cadastro" />
        </SideBarContainer>
    );
};

export default Sidebar;


import React from 'react';
import styled from 'styled-components';

export const SideBarItemStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #007bff;
  font-size: 20px;
  color: white;
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  &:hover{
    background-color: #B53471;
  }
`;


const SidebarItem = ({ Icon, Text }) => {
  return (
    <SideBarItemStyled>
      <Icon />
      {Text}
    </SideBarItemStyled>
  )
}

export default SidebarItem
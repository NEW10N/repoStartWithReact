import React from 'react';
import styled from "styled-components";


import NavheaderContainer from './NavheaderContainer.jsx';

const Header = styled.header`

position: relative;
  background-color: dodgerblue;
  height: 10vh;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
background-color: gray;
`;

function HeaderContainer() {
    return (

            <Header>
                <NavheaderContainer/>
            </Header>

    );
}

export default HeaderContainer
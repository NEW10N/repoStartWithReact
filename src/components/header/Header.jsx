import React from 'react';
import styled from 'styled-components';
import Nav from './nav/Nav'

const HeaderStyled = styled.header`
height: 10vh;
background-color: dodgerblue;
`;
const Header = () => {
    return (
        <HeaderStyled>
            <Nav/>
        </HeaderStyled>
    )
}

export default Header
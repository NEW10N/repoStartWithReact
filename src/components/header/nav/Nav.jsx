import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavStyled = styled.nav`
font-size:3rem;
`;
const Nav = () => {
  return (
    <NavStyled>
        <Link to ="/">Home</Link>
        <Link to = "/productos">Productos</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/About">About</Link>
    </NavStyled>
  )
}

export default Nav
import React from 'react'
import styled from 'styled-components'

const NavStyled = styled.nav`
a{
    padding: 10px;
}
`;
function Nav({link}) {
  return (
    <NavStyled>
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
        <a href="">link4</a>
        <a href="">{link}</a>
    </NavStyled>
  )
}

export default Nav
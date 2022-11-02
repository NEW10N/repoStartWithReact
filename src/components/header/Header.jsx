import React from 'react'
import styled from 'styled-components'
import Nav from './nav/Nav';

const HeaderStyled = styled.header`
display: flex;
background: dodgerblue;
height: 10vh;
width: 100vw;
justify-content: space-evenly;
align-items: center;
`;
function Header({ titulo, children,nav}) {
  console.log(children)
  return (
    <HeaderStyled>
      <Nav link ="Nosotros"/>

      {/* Opcion 1 Importacion directa */}
      {/* <Nav /> */}
      
      {/* Opcion 2 ChildrenProps */}
      {/* {children[0]}
      {children[1]} */}
      {/* {children[2]} */}

      {/* Opcion 3 RenderProps */}
      {/* {nav} */}
    </HeaderStyled>
  )
}

export default Header
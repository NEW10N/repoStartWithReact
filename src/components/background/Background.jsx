import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
background-color:#212121;
width:100vw;
height:100vh;
margin: 0;
justify-content: center;
align-items: center;
`;

const Background = () => {
  return (
    <Container>
        <Outlet/>
    </Container>
  )
}

export default Background
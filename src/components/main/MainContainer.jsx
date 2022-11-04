import React from 'react';
import styled from 'styled-components';
import ProductsContainer from './products/ProductsContainer';

const Main = styled.main`
flex-grow:1;
`;
export const MainContainer = () => {
  return (
    <Main>
      <ProductsContainer/>
    </Main>
  )
}

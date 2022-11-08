import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProductosList from './ProductosList';
import styled from 'styled-components';


const Galleria = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
flex-wrap:wrap;
`;

const ProductosListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=10&skip=10")
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Galleria>
      <ProductosList productos={productos} />
    </Galleria>

  )
}

export default ProductosListContainer
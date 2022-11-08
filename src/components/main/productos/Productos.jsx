import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
border:2px solid dodgerblue;
background-color: lightgray;
max-width:300px;
margin: 10px;
`;

const Productos = ({ productos }) => {
  // console.log(personaje)
  return (
    <>
    <Link to ={`/productos/${productos.id}`}>
      <Card>
        <h1>{productos.name}</h1>
        <img src={productos.image} alt=''></img>
      </Card>
    </Link>
    </>
  )
}

export default Productos
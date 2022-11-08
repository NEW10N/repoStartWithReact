import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
border:2px solid dodgerblue;
background-color: lightgray;
max-width:300px;
margin: 10px;
`;

const Personaje = ({ personaje }) => {
  // console.log(personaje)
  return (
    <>
    <Link to ={`/personajes/${personaje.id}`}>
      <Card>
        <h1>{personaje.name}</h1>
        <img src={personaje.image} alt=''></img>
      </Card>
    </Link>
    </>
  )
}

export default Personaje
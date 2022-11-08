import axios from 'axios';
import React, { useState, useEffect } from 'react'
import PersonajesList from './PersonajesList';
import styled from 'styled-components';


const Galleria = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
flex-wrap:wrap;
`;

const PersonajesListContainer = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => setPersonajes(res.data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <Galleria>
      <PersonajesList personajes={personajes} />
    </Galleria>

  )
}

export default PersonajesListContainer
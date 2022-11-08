import React from 'react';
import { Outlet } from 'react-router-dom';
import PersonajesListContainer from './personajes/PersonajesListContainer';

const Main = () => {
  return (
    <main>
        {/* <PersonajesListContainer/> */}
        <Outlet/>
    </main>
  )
}

export default Main
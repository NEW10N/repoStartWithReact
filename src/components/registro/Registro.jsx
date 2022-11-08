import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
background-color: white;
border: 2px solid black;
padding: 20px;
margin: 20% auto;
width:40%;
border-radius: 5px;
`;

const registro = () => {
    return (
        <Card>
            <h1>Nombre:</h1>
            <input type="text" placeholder="Ingresa tu nombre completo" />
            <h1>Nombre de usuario:</h1>
            <input type="text" placeholder="Ingresa tu nombre de usuario" />
            <h1>Correo:</h1>
            <input type="email" placeholder="Ingresa tu correo electronico" />
            <h1>Contraseña:</h1>
            <input type="password" placeholder="Contraseña" />
        </Card>
    )
}

export default registro
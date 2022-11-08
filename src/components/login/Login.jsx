import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
background-color: white;
border: 2px solid black;
padding: 20px;
margin: 0 auto;
width:40%;
`;

const login = () => {
    return (
        <Card>
            <h1>Usuario:</h1>
            <input type="text"></input>
            <h1>Contraseña:</h1>
            <input type="password"></input>
            <br />
            <button>Iniciar Sesion</button>
            <Link to = "/">
                <button>Home</button>
            </Link>
        </Card>
    )
}

export default login
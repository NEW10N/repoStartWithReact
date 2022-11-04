import React from 'react';
import styled from 'styled-components';
import ButtonsFunctions from './ProductButtonsContainer/ButtonsFunctions';
const Card = styled.div`
display: flex;flex-flow: column;
justify-content: space-evenly;align-items: center;background-color:white !important;width: 300px;border: 1px solid gray;height: 400px;padding: 10px;border-radius: 5px;font-size: 2rem;margin:5px;
img{    max-width: 250px;}`;

function CardProduct({ producto, onAdd }) {
    let { nombre, imagen, stock, precio } = producto

    return (
        <Card >
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <p>
                <b>Precio:</b>
                {precio}
            </p>
            <p>
                <b>Stock:</b>
                {stock}
            </p>

            <ButtonsFunctions producto={producto} onAdd={onAdd} />
        </Card>
    )
}

export default CardProduct
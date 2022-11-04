

import React, { useState } from 'react'
import styled from 'styled-components';

const ButtonAdd = styled.button`
background-color: #35b835;
color: white;
font-weight: bold;
border-radius:10px;
width: 20px;
height: 20px;
border: solid 0px black;
margin: 5px;
:hover{
    cursor: pointer;
}
`;

const ButtonRemove = styled.button`
background-color: red;
color: white;
font-weight: bold;
border-radius:10px;
width: 20px;
height: 20px;
border: solid 0px black;
margin: 5px;
:hover{
    cursor: pointer;
}
`;

const ButtonSet = styled.button`
    background-color: dodgerBlue;
color: white;
font-weight: bold;
border-radius:10px;
width: 100px;
height: 20px;
border: solid 0px black;
margin: 5px;
:hover{
    cursor: pointer;
}
`;

function ButtonsFunctions({ producto, onAdd }) {

    const [cantidadSeleccionada, setcantidadSeleccionada] = useState(0);

    function add() {
        if (producto.stock > cantidadSeleccionada) setcantidadSeleccionada(cantidadSeleccionada + 1);
    };
    function remove() {
        if (cantidadSeleccionada > 0) setcantidadSeleccionada(cantidadSeleccionada - 1)
    };
    function reset() {
        if (producto.stock >= cantidadSeleccionada) {
            onAdd(cantidadSeleccionada)
            setcantidadSeleccionada(1)
        }
    };
    return (
        <>
            <div>
                <ButtonRemove onClick={remove}>-</ButtonRemove>
                {cantidadSeleccionada}
                <ButtonAdd onClick={add}>+</ButtonAdd>
            </div>
            <div>
                <ButtonSet onClick={reset}>Agregar</ButtonSet>
            </div>
        </>
    )
}

export default ButtonsFunctions
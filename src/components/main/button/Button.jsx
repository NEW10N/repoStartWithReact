import React, { useState } from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.button`
`;

function Button({handleClick}) {
    return (
            <ButtonStyle onClick={handleClick}>Agregar</ButtonStyle>
    )
}

export default Button
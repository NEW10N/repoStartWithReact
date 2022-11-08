import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-color: white;
padding: 10px;
border: 2px solid dodgerblue;
font-size: 3rem;

`;


const  VerticalStyle = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: space; 
     align-items: center;
`;
const HorizontalStyle = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;


const PersonajeData = ({ personaje }) => {
    // console.log(personaje);
    
    return (
        <Card>
            <h2>{personaje.name}</h2>
            <HorizontalStyle>

                <img src={personaje.image} alt={personaje.name}></img>

                <VerticalStyle>
                    <h3><b>Status:</b></h3>
                    {personaje.status}
                    <br />

                    <h3><b>Spacie:</b></h3>
                    {personaje.species}
                    <br />
                   
                    <br />
                </VerticalStyle>
            </HorizontalStyle>

        </Card >
    )
}

export default PersonajeData
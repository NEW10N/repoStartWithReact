import React from 'react'
import styled from 'styled-components';
import InfoContainer from './InfoContainer';

const Main = styled.main`
    flex-grow: 1;
  background-color: #212121;
  color: red;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: justify;
  font-size: 1.8rem;
`;

function MainContainer() {
    return (
        <Main>
            <InfoContainer/>
        </Main>
    )
}

// function MainContainer(props) {
//     return (
//         <Main>
//             <h1>{props.nombre}</h1>
//             <h2>{props.numero}</h2>
//             <p>{props.info}</p>
//         </Main>
//     )
// }

export default MainContainer
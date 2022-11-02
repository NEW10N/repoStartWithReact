import React,{useState} from 'react'
import styled from 'styled-components'
import Button from './button/Button';
import Count from './count/Count';


const MainStyle = styled.main`
flex-grow:1;
padding: 10px;
font-size: 2rem;
`;

function Main() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <MainStyle>
        <Count count = {count}/>
        <Button handleClick={handleClick}/>
    </MainStyle>
  )
}

export default Main
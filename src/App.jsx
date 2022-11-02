import { createGlobalStyle } from 'styled-components';
// import './App.css';
import HeaderContainer from './components/HeaderContainer';
import MainContainer from './components/MainContainer';
import FooterContainer from './components/FooterContainer';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
  font-size: 62.5%
}

body, #root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

`;

function App() {
  return (
    <>
    <GlobalStyle/>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer/>
    </>

  );
}

export default App;

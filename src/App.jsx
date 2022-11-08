import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import Main from './components/main/Main';

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
  /* background-color: orange; */
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
      <GlobalStyle />
      <Header/>
      <Main/>
    </>

  );
}

export default App;

import {useEffect} from 'react';
import GlobalStyle, {Container} from "./GlobalStyles";
import WebFont from 'webfontloader';
import Navbar from './resources/components/Navbar/Navbar';
import BuildTheCommunity from './resources/components/BuildTheCommunity/BuildTheCommunity';

function App() {

  useEffect(() => {
    WebFont.load({
        google:{
            families: ['Poppins:700', 'Open Sans:400, 600, 700']
        }
    });
  },[])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar/>
        <BuildTheCommunity />
      </Container>
      
    </>
  );
}

export default App;

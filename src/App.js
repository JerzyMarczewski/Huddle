import {useEffect} from 'react';
import GlobalStyle, {Container} from "./GlobalStyles";
import WebFont from 'webfontloader';
import Navbar from './resources/components/Navbar/Navbar';
import BuildTheCommunity from './resources/components/BuildTheCommunity/BuildTheCommunity';
import GrowTogether from './resources/components/GrowTogether/GrowTogether';

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
        <GrowTogether />
      </Container>
      
    </>
  );
}

export default App;

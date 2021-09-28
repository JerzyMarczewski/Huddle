import {useEffect} from 'react';
import GlobalStyle, {Container} from "./GlobalStyles";
import WebFont from 'webfontloader';
import Navbar from './resources/components/Navbar/Navbar';

function App() {

  useEffect(() => {
    WebFont.load({
        google:{
            families: ['Poppins: 700', 'Open Sans: 400, 600, 700']
        }
    });
  },[])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar/>
      </Container>
      
    </>
  );
}

export default App;

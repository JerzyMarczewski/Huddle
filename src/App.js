import {useEffect} from 'react';
import GlobalStyle from "./GlobalStyles";
import WebFont from 'webfontloader';

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
      
    </>
  );
}

export default App;

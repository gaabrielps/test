import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #fafafa;
    --cards: #FFFFFF;
    --text-title: #333333;
    --text-body: #969cb3;
    --background: #fafafa;
    --shape: #ffffff;
}


*{
 padding:0;
 margin: 0;
 box-sizing: border-box;
   
}

//html {
   // @media(max-width: 1080px) {
     //   font-size: 93.75%; //15px
    //}

    //@media(max-width: 720px) {
      //  font-size: 87.5%; //14px
  //  }
//}

body {
    font-family: 'Poppins', sans-serif;
    font-size: 400;
    height: 100%;
}
 
`
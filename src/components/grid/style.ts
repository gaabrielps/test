import styled from "styled-components";


export const Grid = styled.div`

`;


export const Content = styled.div`
div{
    background: red;
    height: 300px
}

header{
    position: absolute;
    width: 51px;
    height: 1088px;
    left: 0px;
    top: 0px;
    background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);


}

max-width: 1280px;
margin: 50px auto;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
font-size:50px;
gap:30px;


div:nth-child(1){
    background: green;
  
    grid-column: span 2;

}
div:nth-child(6){
    background: green;
  

    grid-column: span 2;
    
}

div:nth-child(5){
    background: green;
    
    grid-row: span 2;
    height: 628px;

}




`;
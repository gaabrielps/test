import styled from "styled-components";

export const Container = styled.main`

.title{
    margin-top: 2rem;
   text-align: center;
}
    
    .grid{
    max-width: 1200px;
    height: 100%;
    
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    font-size:20px;
    gap:10px;
    
    div:nth-child(1){
    grid-column: span 2;
    }
    div:nth-child(6){
    grid-column: span 2;
    }
    div:nth-child(5){   
    grid-row: span 2; 
    }
    .cards {
        background-color: var(--shape);
        border: 0.5px solid #E4E4E4;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        height: 100%;

    } 
    }

`;
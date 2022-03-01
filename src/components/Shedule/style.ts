import styled from "styled-components";

export const Card = styled.div`
div{
    display: flex;
    justify-content: space-between;
    margin: 0.8rem;
    background-color: var(--shape);

   
    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        height: 21px;
   }

   .buttonHeader{
        width: 40%;
        height: 2rem;
        margin-left: 8rem;
        background: #C4C4C4;
        border: 1px solid #C4C4C4;
        box-sizing: border-box;
        border-radius: 100px; 
        text-align: center;
}
}
    input{
        width: 97%;
        height: 2rem;
        margin: 10px;
        background: #FAFAFA;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 100px;    
}
`;
export const Content = styled.div`
margin-top: 4rem;

table{
    width: 100%;
    border-spacing: 0.5rem;

    th{
        color:var(--text-title);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 10px;

    }
    
    .name{
        text-align: left;
    }

    td{
        padding: 1rem 2rem;
        border: 0;
        font-weight:200;
        color: var(--text-title);
        font-size: 12px;
        text-align: center;        
    }

    tbody{
        border-bottom:  solid 1px red;
    }
}
`;


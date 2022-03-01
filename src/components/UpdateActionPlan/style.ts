import styled from "styled-components";

export const Card = styled.div`

div {

    display: flex;
    justify-content: space-between;
    margin: 0.8rem;
    background-color: var(--shape);

}



    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        height: 21px;
   }


header{
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #B0B0B0;
        margin: 3%;
    }
}

input{    
        width: 96%;
        height: 2rem;
        margin: 10px;
        background: #FAFAFA;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 100px;    
}


.buttonHeader{
        width: 96%;
        height: 2rem;
        margin: 10px;
        background: #C4C4C4;
        border: 1px solid #C4C4C4;
        box-sizing: border-box;
        border-radius: 100px; 
        text-align: center;  
}


`;

export const Content = styled.div`
table{
    width: 100%;
    border-spacing: 0.2rem;

    th{
        color:var(--text-title);
        font-weight: 400;
        padding: 0.5rem 1rem;
        text-align: left;
        line-height: 1.5rem;
        font-size: 10px;
    }

    td{
        padding: 0.3rem 0.5rem;
        border: 0;
        font-weight:200;
        color: var(--text-title);
        font-size: 12px;

        button{
            background-color: transparent;
            border: 1px solid #7FC008;
            border-radius: 100px;
            padding: 0.5rem;
            margin-right: 0.2px;
        }
        
     .subtitle{
         margin-top: 0.8rem;
     }

     .button{
         margin-left: 5.4rem;
    }
    }
    .date{
        text-align: right;
        margin-right: 1rem;
        padding: 0.5rem;
    }


}

`;

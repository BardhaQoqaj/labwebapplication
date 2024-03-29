import styled from "styled-components";

export const CategoryContainer = styled.div `
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:70px;
    //background:#7B876D;
   


    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height:1300px;
    }
`

export const CategoryWrapper = styled.div `
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`


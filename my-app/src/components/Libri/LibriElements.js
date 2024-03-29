import styled from "styled-components";

export const LibriContainer = styled.div `
    height:800px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:650px;
    


    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height:1300px;
    }
`

export const LibriWrapper = styled.div `
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

 export const LibriCard = styled.div `
     background:#a1887f;
     display:flex;
     flex-direction:column;
     justify-content:flex-start;
     align-items:center;
     border-radius:45px;
     max-height:500px;
     
     box-shadow:0 1px 3px rgba(0,0,0,0.2);
     transition:all 0.2 ease-in-out;

     &:hover{
         transform:scale(1.02);
         transition:all 0.2s ease-in-out;
         cursor:pointer;
         color:#ffff;
     }
 `

 export const LibriIcon = styled.img `
 height:170px;
 width:160px;
 margin-bottom:10px;

`

export const LibriH1 = styled.h1`
    font-size:1.5rem;
    color:#55555;
    margin-bottom:64px;

    @media screen and (max-width: 480px){
        font-size:2rem;
    }
`

 export const LibriH2 = styled.h2`
     font-size:1rem;
     margin-bottom:10px;
 `

 export const LibriPP = styled.p`
     font-size:1rem;
     text-align:center;
 `

 export const LibriD = styled.p`
     font-size:1rem;
     text-align:center;
 `

 export const LibriV = styled.p`
     font-size:1rem;
     text-align:center;
 `

 export const LibriIdP = styled.p`
     font-size:1rem;
     text-align:center;
 `
 export const LibriE = styled.p`
     font-size:1rem;
     text-align:center;
 `

  export const OptionsP = styled.p`
     font-size:1rem;
     text-align:center;
 `
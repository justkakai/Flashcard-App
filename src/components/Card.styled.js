import styled from "styled-components";
import gradient3 from "../images/gradient-3.png";

const Card = styled.div`
position: absolute;
top: 3em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
height: 25rem;
width: 20rem;
padding: 0 1.5rem;
outline: 1px solid transparent;
//background: #4C2E05;
background: url(${gradient3});
background-position: top;
border-radius: 16px;
border: 1px solid rgba(255, 255, 255, 0.2);
-webkit-transform-origin: 50%  51%;
// -webkit-backface-visibility: hidden;
`

export {Card};
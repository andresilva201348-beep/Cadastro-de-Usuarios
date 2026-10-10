import styled from "styled-components";

export const Button = styled.button`

border:${props =>
        props.theme === 'primary' ? 'none' : '1px solid #ffffff'};
background: ${props =>
        props.theme === 'primary'
            ? 'linear-gradient(180deg, #0037ff, #030638f8)'
            : 'linear-gradient(180deg, #d900ff, #030638f8)'};
font-size: 16px;
color: #ffffff;
padding: 10px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover {
    
    opacity: 0.8;
}
&:active {
    opacity: 0.6;  
} 
`
import styled from 'styled-components';

export const Card = styled.div`
padding: 10px;
margin: 0 auto;
margin-top: 10px;
background-color:pink;
transition: 0.3s;
width: 20%;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
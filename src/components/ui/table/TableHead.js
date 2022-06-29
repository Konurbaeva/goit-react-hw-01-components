import styled from 'styled-components';

export const TableHead = styled.thead`
border: 1px solid red;
padding: 10px;
height:auto;
color: ${({theme}) => theme.colors.secondary}
`
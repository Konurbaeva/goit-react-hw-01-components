import styled from 'styled-components';

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  &:nth-child(odd) {
    background: green;
  }
  &:nth-child(even) {
    background: pink;
  }
`;

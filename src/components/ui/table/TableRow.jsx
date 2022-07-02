import styled from 'styled-components';

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${props => (props.red ? 'white' : 'yellow')};
`;

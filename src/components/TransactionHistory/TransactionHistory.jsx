import PropTypes from 'prop-types';
import { 
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeadRow,
  TableHeader,
  TableBodyText,
} from '../ui/table'

import { Container } from '../ui/Container';

export const TransactionHistory = ({items}) => {
  return (
    <Container>
    <Table>
        <TableHead>
            <TableHeadRow>
                <TableHeader>type</TableHeader>
                <TableHeader>amount</TableHeader>
                <TableHeader>currency</TableHeader>
            </TableHeadRow>
        </TableHead>
        <TableBody>
            {items.map(({ id, type, amount, currency }) => (
                <TableRow key={id}>
                    <TableBodyText>{type}</TableBodyText>
                    <TableBodyText>{amount}</TableBodyText>
                    <TableBodyText>{currency}</TableBodyText>
                </TableRow>
            ))}
        </TableBody>
    </Table>
       </Container>
)
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string, 
            type:PropTypes.string,
            amount:PropTypes.string, 
            currency: PropTypes.string
        })
    )
}
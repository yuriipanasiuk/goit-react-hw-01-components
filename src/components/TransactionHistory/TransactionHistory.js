import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  Column,
  Row,
  TableColumn,
  TableRow,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <Column>
          <Row>Type</Row>
          <Row>Amount</Row>
          <Row>Currency</Row>
        </Column>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableColumn key={id}>
            <TableRow>{type}</TableRow>
            <TableRow>{amount}</TableRow>
            <TableRow>{currency}</TableRow>
          </TableColumn>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

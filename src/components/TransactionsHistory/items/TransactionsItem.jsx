import { TableElement, TextTable } from './TransactionsItem.styled';
import PropTypes from 'prop-types';

export const TransactionItem = ({ type, amount, currency }) => {
  const FirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <TableElement>
      <TextTable>{FirstLetter(type)}</TextTable>
      <TextTable>{amount}</TextTable>
      <TextTable>{currency}</TextTable>
    </TableElement>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

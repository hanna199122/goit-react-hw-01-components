import PropTypes from 'prop-types';
import css from '../transactions/Transactions.module.css';

const Transactions = props => {
  // console.log(props.items[0]);
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {props.items.map(item => (
        <TransactionItem key={item.id} {...item} />
      ))}
    </table>
  );
};
export default Transactions;

const TransactionItem = ({ id, type, amount, currency }) => {
  console.log(type);
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

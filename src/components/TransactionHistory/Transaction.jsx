import css from '../TransactionHistory/Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.headers}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr className={css.row} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

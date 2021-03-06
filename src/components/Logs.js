import React, { useContext } from "react";
import { GlobalContext } from "../components/context/GlobalState";
import Transaction from "./Transaction";

function Logs() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div id="transaction-history">
      <h3>All transactions</h3>
      <hr />
      <ul id="transaction-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default Logs;

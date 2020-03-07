import React, {useContext} from 'react';
import Card from "react-bootstrap/Card";
import {TransactionContext} from "../../contexts/TransactionContext";
import TransactionCard from "../TransactionCard/TransactionCard";
import "./TransactionsList.css"

function TransactionsList() {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];

    return (
        <Card>
            <Card.Body>
                <Card.Title>Transactions</Card.Title>
                {transactions.map(transaction => (
                    <TransactionCard key={transaction.id} title={transaction.title} amount={transaction.amount}
                                     direction={transaction.direction} date={transaction.dueDate}/>
                ))}
            </Card.Body>
        </Card>
    );
}

export default TransactionsList;
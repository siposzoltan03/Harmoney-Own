import React, {useContext} from "react";
import "./Balance.css";
import './Balance.css';
import Card from "react-bootstrap/Card";
import NumberFormater from "../../utils/NumberFormater";
import {TransactionContext} from "../../contexts/TransactionContext";

let sum = 0;

const Balance = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    transactions.forEach(function (transaction) {
        transaction.direction === 'Income' ? sum += transaction.amount : sum -= transaction.amount;
    });
    return (
        <Card>
            <Card.Body>
                <Card.Title>Actual Balance</Card.Title>
                <Card.Text>{NumberFormater.formatBalance(sum)} Ft</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Balance;
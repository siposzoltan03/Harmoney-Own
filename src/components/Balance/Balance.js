import React, {useContext} from "react";
import "./Balance.css";
import './Balance.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "react-bootstrap/Card";
import NumberFormatter from "../../utils/NumberFormatter";
import {TransactionContext} from "../../contexts/TransactionContext";


const Balance = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    let sum = 0;
    transactions.forEach(function (transaction) {
        transaction.direction === 0 ? sum += transaction.amount : sum -= transaction.amount;
    });
    return (
        <Paper elevation={1}>
            <Typography variant={"h5"} content={"h4"}>Actual Balance</Typography>
            <Typography className={"card-text"} variant={"h1"}>{NumberFormatter.formatBalance(sum)} Ft</Typography>
        </Paper>
    );
};

export default Balance;

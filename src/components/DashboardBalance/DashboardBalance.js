import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import {TransactionContext} from "../../contexts/TransactionContext";
import NumberFormatter from "../../utils/NumberFormatter";

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function DashboardBalance() {
    const classes = useStyles();
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];

    const calculateSum = (transactions) => {
        let sum = 0;
        transactions.forEach(transaction => transaction.direction === 0 ? sum += transaction.amount : sum -= transaction.amount)
        return sum;
    };

    return (
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                {NumberFormatter.formatBalance(calculateSum(transactions))} Ft
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                On {new Date().toDateString()}
            </Typography>
            <div>
                <Link color="primary" to="/transactions">
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}
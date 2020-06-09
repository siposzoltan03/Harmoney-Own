import React, {useContext} from 'react';
import {useTheme} from '@material-ui/core/styles';
import {Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import Title from '../Title/Title';
import {TransactionContext} from "../../contexts/TransactionContext"


function createData(date, amount) {
    return {date, amount}
}

const getCurrentMonth = () => {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let now = new Date();
    return months[now.getMonth()];
};

const getTransactionDatum = (transaction) => {
    return new Date(transaction.dueDate).toLocaleDateString().slice(-7);
};

const isTransactionInThisMonth = (transaction) => {
    return  new Date().getMonth() === new Date(transaction.dueDate).getMonth();
};

export default function Chart() {
    const theme = useTheme();
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];

    const data = transactions
        .filter(transaction => isTransactionInThisMonth(transaction))
        .map(transaction => createData(getTransactionDatum(transaction), transaction.amount));

    return (
        <React.Fragment>
            <Title>This Month ({getCurrentMonth()})</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data.reverse()}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="date" stroke={theme.palette.text.secondary} angle={315}/>
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Transactions
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
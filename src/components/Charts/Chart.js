import React, {useContext} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title/Title';
import {TransactionContext} from "../../contexts/TransactionContext"

// Generate Sales Data
// function createData(time, amount) {
//     return { time, amount };
// }

function createData(date, amount) {
    return {date, amount}
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];

const getCurrentMonth = () => {
    const options = {day: "numeric"};
    return new Intl.DateTimeFormat('default', options).format(new Date());
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
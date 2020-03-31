import React, {useContext} from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from "react-bootstrap/Card";
import {TransactionContext} from "../../contexts/TransactionContext";

const BalanceChart = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    let income = 0;
    let expenditure = 0;
    transactions.forEach(function (transaction) {
        if (transaction.direction === 'Income') {
            income += transaction.amount;
        }else{
            expenditure += transaction.amount;
        }
    });

    const data = {
        datasets: [{
            data: [ income, expenditure],
            backgroundColor:[
                '#004225',
                '#600000'
            ]
        }],
        labels: [
            'Income',
            'Expenditure',
        ],
    };

    const options = {
        legend: {
            labels: {
                fontColor: 'white',
                fontSize: 20,
                fontFamily: "'Open Sans', sans-serif"
            }
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Cashflow ratio</Card.Title>
                <Doughnut data={data} options={options}/>
            </Card.Body>
        </Card>
    );
};

export default BalanceChart;
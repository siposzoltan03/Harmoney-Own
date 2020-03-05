import React, {useContext} from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from "react-bootstrap/Card";
import NumberFormater from "../../utils/NumberFormater";
import {TransactionContext} from "../../contexts/TransactionContext";

let Income = 0;
let Expenditure = 0;

const DashboardChart = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    Income = 0;
    Expenditure = 0;
    transactions.forEach(function (transaction) {
        if (transaction.direction === 'Income') {
            Income += transaction.amount;
        }else{
            Expenditure += transaction.amount;
        }
    });

    const data = {
        datasets: [{
            data: [ Income  ,Expenditure],
            backgroundColor:[
                '#BFA5A3',
                '#600000'
            ],
            options: {
                plugins:{
                fontSize: "120px",
                color: 'yellow'
                }
            }
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Income',
            'Expenditure',
        ],
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Cashflow ratio</Card.Title>
                <Doughnut data={data}/>
            </Card.Body>
        </Card>
    );
};






export default DashboardChart;
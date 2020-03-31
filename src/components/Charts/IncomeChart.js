import React, {useContext} from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from "react-bootstrap/Card";
import {TransactionContext} from "../../contexts/TransactionContext";

const IncomeChart = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    let extra = 0;
    let gift = 0;
    let heritage = 0;
    let increment = 0;
    let other = 0;
    let prize = 0;
    let salary = 0;


    transactions.forEach((transaction) => {
        if (transaction.direction === "Income") {
            switch (transaction.category) {
                case "Extra":
                    extra += transaction.amount;
                    break;
                case "Gift":
                    gift += transaction.amount;
                    break;
                case "Heritage":
                    heritage += transaction.amount;
                    break;
                case "Increment":
                    increment += transaction.amount;
                    break;
                case "Other":
                    other += transaction.amount;
                    break;
                case "Prize":
                    prize += transaction.amount;
                    break;
                case "Salary":
                    salary += transaction.amount;
                    break;
                default:
                    break;
            }
        }
    });

    const data = {
        datasets: [{
            data: [
                extra ,gift, heritage, increment, other, prize, salary
            ],
            backgroundColor:[
                "#e9ed1a", "#db4041", "#fcaa07",
                "#cf6edd", "#1E90FF","#19ea2e", "#7b84c4"
            ]
        }],
        labels: [
            "Extra", "Gift", "Heritage", "Increment", "Other", "Prize", "Salary"
        ],
    };

    const options = {
        responsive: true,
        legend: {
            position: 'left',
            labels: {
                boxWidth: 20,
                fontColor: 'white',
                fontSize: 20,
                fontFamily: "'Open Sans', sans-serif"
            }
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Incomes</Card.Title>
                <Doughnut data={data} options={options} height={250}/>
            </Card.Body>
        </Card>
    );
};

export default IncomeChart;
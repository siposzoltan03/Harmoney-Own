import React, {useContext} from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from "react-bootstrap/Card";
import {TransactionContext} from "../../contexts/TransactionContext";

const ExpenditureChart = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    let education = 0;
    let entertainment = 0;
    let groceries = 0;
    let health = 0;
    let household = 0;
    let insurance = 0;
    let investment = 0;
    let kids = 0;
    let other = 0;
    let pets = 0;
    let sport = 0;
    let transportation = 0;

    transactions.forEach((transaction) => {
        if (transaction.direction === "Expenditure") {
            switch (transaction.category) {
                case "Education":
                    education += transaction.amount;
                    break;
                case "Entertainment":
                    entertainment += transaction.amount;
                    break;
                case "Groceries":
                    groceries += transaction.amount;
                    break;
                case "Health":
                    health += transaction.amount;
                    break;
                case "Household":
                    household += transaction.amount;
                    break;
                case "Insurance":
                    insurance += transaction.amount;
                    break;
                case "Investment":
                    investment += transaction.amount;
                    break;
                case "Kids":
                    kids += transaction.amount;
                    break;
                case "Other":
                    other += transaction.amount;
                    break;
                case "Pets":
                    pets += transaction.amount;
                    break;
                case "Sport":
                    sport += transaction.amount;
                    break;
                case "transportation":
                    transportation += transaction.amount;
                    break;
                default:
                    break;
            }
        }
    });

    const data = {
        datasets: [{
            data: [
                education ,entertainment, groceries, health, household, insurance, investment, kids, other, pets,
                sport, transportation
            ],
            backgroundColor:[
                "#e9ed1a", "#db4041", "#19eae7", "#fcaa07",
                "#cf6edd", "#1943ea","#19ea2e", "#824c0a",
                "#8919ea", "#0c702f", "#c4c4b8", "#7b84c4"
            ]
        }],
        labels: [
            "Education", "Entertainment", "Groceries", "Health", "Household", "Insurance", "Investment", "Kids", "Other",
            "Pets", "Sport", "transportation"
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
                <Card.Title>Expenditures</Card.Title>
                <Doughnut data={data} options={options}/>
            </Card.Body>
        </Card>
    );
};

export default ExpenditureChart;
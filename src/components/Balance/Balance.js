import React from 'react';
import {Statistic} from 'antd';
import './Balance.css';
import Card from "react-bootstrap/Card";
import NumberFormater from '../../utils/NumberFormater'

const Balance = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Actual Balance</Card.Title>
                <Card.Text>
                    {NumberFormater.formatBalance(Value)}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

const Value = 386450;

export default Balance;
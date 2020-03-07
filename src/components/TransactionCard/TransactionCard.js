import React from 'react';
import {Card, Statistic} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import "./TransactionCard.css"

function TransactionCard(transaction) {
    return (
        <Card>
            <Statistic
                title={transaction.title}
                value={transaction.amount}
                precision={2}
                valueStyle={transaction.direction === "Income" ? {color: '#3f8600'} : {color: `#cf1322`}}
                prefix={transaction.direction === "Income" ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="Ft"
            />
            <div className="due-date">
                {(transaction.date || " ").slice(0, 10)}
            </div>
        </Card>
    );
}

export default TransactionCard;
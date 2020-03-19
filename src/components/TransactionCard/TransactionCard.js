import React, {useContext} from 'react';
import styled from "styled-components";
import {Card} from "react-bootstrap";
import NumberFormatter from "../../utils/NumberFormatter";
import CaretUpOutlined from "@ant-design/icons/lib/icons/CaretUpOutlined";
import CloseSquareOutlined from "@ant-design/icons/lib/icons/CloseSquareOutlined";
import CaretDownOutlined from "@ant-design/icons/lib/icons/CaretDownOutlined";

import "./TransactionCard.css"
import {ModalVisibilityContext} from "../../contexts/ModalVisibilityContext";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";

const Amount = styled.div`
    color: ${prop => prop.direction === "Income" ? 'green' : 'red'}
`;

function TransactionCard(transaction) {
    const transactionModal = useContext(ModalVisibilityContext).transactionModal;
    const transactionModalType = useContext(ModalVisibilityContext).transactionModalType;
    const setTransactionModalIsVisible = transactionModal[1];
    const setTransactionType = transactionModalType[1];

    const editHandler = () => {
        setTransactionType(transaction.direction);
        setTransactionModalIsVisible(true);
    };

    return (
        <Card>
            <Card.Header as="h4">
                <div className="transaction-title">{transaction.title}</div>
                <div className="edit-delete-container">
                    <div className="transaction-edit"><EditOutlined onClick={editHandler} /></div>
                    <div className="transaction-delete" ><CloseSquareOutlined /></div>
                </div>
            </Card.Header>
            <Card.Body as="h5">
                <Amount className="transaction-direction" direction={transaction.direction}>{transaction.direction === "Income" ? <CaretUpOutlined /> : <CaretDownOutlined />}</Amount>
                <Amount className="transaction-amount" direction={transaction.direction}>{NumberFormatter.formatBalance(transaction.amount)} Ft</Amount>
            </Card.Body>
            <Card.Footer as="h6">
                <div className="transaction-tags">Tags</div>
                <div className="transaction-date">{(transaction.date || " ").slice(0, 10)}</div>
            </Card.Footer>
        </Card>
    );
}

export default TransactionCard;
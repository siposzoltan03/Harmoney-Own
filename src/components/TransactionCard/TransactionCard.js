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
import {TransactionContext} from "../../contexts/TransactionContext";
import {store} from "react-notifications-component";

const Amount = styled.div`
    color: ${prop => prop.direction === "Income" ? 'green' : 'red'}
`;

function TransactionCard(transaction) {
    const transactionContext = useContext(TransactionContext);

    const setId = transactionContext.id[1];
    const setTitle = transactionContext.title[1];
    const setAmount = transactionContext.amount[1];
    const setDate = transactionContext.date[1];
    const setFrequency = transactionContext.frequency[1];
    const setHttpRequest = transactionContext.httpRequest[1];

    const deleteTransaction = transactionContext.deleteTransaction;

    const transactionModal = useContext(ModalVisibilityContext).transactionModal;
    const transactionModalType = useContext(ModalVisibilityContext).transactionModalType;
    const setTransactionModalIsVisible = transactionModal[1];
    const setTransactionType = transactionModalType[1];

    const editHandler = () => {
        console.log(transaction.date);
        setId(transaction.id);
        setTitle(transaction.title);
        setAmount(transaction.amount);
        setDate(new Date(transaction.date));
        setFrequency(transaction.frequency);
        setHttpRequest("PUT");
        setTransactionType(transaction.direction);
        setTransactionModalIsVisible(true);
    };

    const deleteHandler = async () => {
        const transactionFailed = await deleteTransaction(transaction.id);
        if (transactionFailed) {
            showTransactionNotification("failure")
        } else {
            showTransactionNotification("success")
        }
    };

    const showTransactionNotification = (type) => {
        store.addNotification({
            title: type === "success" ? "Success!" : "Error!",
            message: type === "success" ? "The transaction has been deleted" : "The transaction couldn't be deleted",
            type: type === "success" ? "success" : "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "flipInX"],
            animationOut: ["animated", "flipOutX"],
            dismiss: {
                duration: 3000
            }
        });
    };

    return (
        <Card>
            <Card.Header as="h4">
                <div className="transaction-title">{transaction.title}</div>
                <div className="edit-delete-container">
                    <div className="transaction-edit"><EditOutlined onClick={editHandler} /></div>
                    <div className="transaction-delete" ><CloseSquareOutlined onClick={deleteHandler} /></div>
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
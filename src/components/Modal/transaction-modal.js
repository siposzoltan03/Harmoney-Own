import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { transactionToJson } from "../../utils/createjson";
import TransactionForm from "../TransactionForm/transaction-form";
import { TransactionContext } from "../../contexts/TransactionContext";

export default function TransactionModal(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [frequency, setFrequency] = useState("Single");

  const transactionContext = useContext(TransactionContext);
  const postTransaction = transactionContext.postTransaction;
  const getTransactions = transactionContext.getTransactions;

  const saveChanges = () => {
    const jsonData = transactionToJson(title, date, amount, frequency, props.transactionType);
    postTransaction(jsonData);
    closeModal();
  }

  const closeModal = () => {
    props.handleClose();
    // this must be changed to refresh front page function
    getTransactions();
    setTitle("");
    setDate(new Date());
    setAmount(0);
    setFrequency("Single");
  }

  return (
    <>
      <Modal show={props.display} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.transactionType === "income" ?
              "Add new income" :
              "Add new expenditure"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm
            title={title}
            setTitle={(e) => setTitle(e.target.value)}
            date={date}
            setDate={setDate}
            amount={amount}
            setAmount={(e) => setAmount(e.target.value)}
            frequency={frequency}
            setFrequency={(e) => setFrequency(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

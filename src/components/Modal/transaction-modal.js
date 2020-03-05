import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import TransactionForm from "../TransactionForm/transaction-form";

export default function TransactionModal(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [frequency, setFrequency] = useState("Single");

  const saveChanges = () => {
    console.log(title, date, amount, frequency);
    closeModal();
  };

  const closeModal = () => {
    props.handleClose();
    setTitle("");
    setDate(new Date());
    setAmount(0);
    setFrequency("Single");
  };

  return (
    <>
      <Modal show={props.display} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.transactionType === "income"
              ? "Add new income"
              : "Add new cost"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm
            title={title}
            setTitle={e => setTitle(e.target.value)}
            date={date}
            setDate={setDate}
            amount={amount}
            setAmount={e => setAmount(e.target.value)}
            frequency={frequency}
            setFrequency={e => setFrequency(e.target.value)}
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

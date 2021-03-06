import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { transactionToJson } from "../../../utils/createjson";
import TransactionForm from "../../Forms/TransactionForm/TransactionForm";
import { ModalVisibilityContext } from "../../../contexts/ModalVisibilityContext";
import { TransactionContext } from "../../../contexts/TransactionContext";
import { store } from "react-notifications-component";

export default function TransactionModal(props) {
  const transactionContext = useContext(TransactionContext);
  const { transactionModal, transactionModalType } = useContext(ModalVisibilityContext);

  const [id, setId] = transactionContext.id;
  const [title, setTitle] = transactionContext.title;
  const [amount, setAmount] = transactionContext.amount;
  const [date, setDate] = transactionContext.date;
  const [frequency, setFrequency] = transactionContext.frequency;
  const [category, setCategory] = transactionContext.category;
  const [httpRequest, setHttpRequest] = transactionContext.httpRequest;

  const [transactionModalIsVisible, setTransactionModalIsVisible] = transactionModal;
  const transactionType = transactionModalType[0];

  const postTransaction = transactionContext.postTransaction;
  const putTransaction = transactionContext.putTransaction;

  const saveChanges = async () => {
    const titleIsValid = validTitle();
    const dateIsValid = validDate();
    const amountIsValid = validAmount();
    let submittable = titleIsValid && dateIsValid && amountIsValid;
    if (submittable) {
      const jsonData = transactionToJson(id, title, date, amount, frequency, transactionType, category);
      const transactionFailed = httpRequest === "POST" ? await postTransaction(jsonData) : await putTransaction(jsonData, id);
      if (transactionFailed) {
        showTransactionNotification("failure")
      } else {
        showTransactionNotification("success")
      }
      closeModal();
    }
  };

  const closeModal = () => {
    setTransactionModalIsVisible(false);
    setId(null);
    setTitle("");
    setDate(new Date());
    setAmount("");
    setFrequency("Single");
    setCategory("Other");
    setHttpRequest("");
  };

  const validateTitle = (e) => {
    setTitle(e.target.value);
    validTitle();
  };

  const validTitle = () => {
    const currentTitle = document.querySelector("#formBasicTitle").value;
    const notification = document.querySelector("#error-title");
    if (currentTitle.length === 0) {
      notification.textContent = "This field is required";
      return false;
    }
    if (currentTitle.length > 30) {
      notification.textContent = "The title can't be longer than 30 characters";
      return false;
    }
    notification.textContent = "";
    return true;
  };

  const validDate = () => {
    const currentDate = date;
    const thisYear = new Date().getFullYear();
    const notification = document.querySelector("#error-date");
    if (currentDate == null) {
      setDate(new Date());
      notification.textContent = "Invalid date has been set to current date";
      return true;
    }
    const currentYear = date.getFullYear();
    if (currentYear > thisYear + 10) {
      notification.textContent = `You shouldn't plan ${currentYear - thisYear} years ahead`;
      return false;
    }
    notification.textContent = "";
    return true;
  };

  const validateAmount = (e) => {
    setAmount(e.target.value);
    validAmount();
  };

  const showTransactionNotification = (type) => {
    store.addNotification({
      title: type === "success" ? "Success!" : "Error!",
      message: type === "success" ? "Transaction successfully added" : "Something went wrong",
      type: type === "success" ? "success" : "danger",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animated", "flipInX"],
      animationOut: ["animated", "flipOutX"],
      dismiss: {
        duration: 3000
      }
    });
  }

  const validAmount = () => {
    const inputAmount = document.querySelector("#formBasicAmount").value;
    const currentAmount = parseInt(inputAmount);
    const currentAmountFloat = parseFloat(inputAmount)
    const notification = document.querySelector("#error-amount");
    const pattern = "^\\d+$";
    if (currentAmountFloat === 0 || inputAmount.length === 0) {
      notification.textContent = "This field is required";
      return false
    }
    if (!inputAmount.match(pattern) || (currentAmountFloat > 0 && currentAmountFloat < 1)) {
      notification.textContent = "This field must be an integer";
      return false
    }
    if (currentAmount > 2147483647) {
      notification.textContent = "The amount can't be higher than 2147483647";
      return false
    }
    notification.textContent = "";
    return true
  }

  return (
    <>
      <Modal show={transactionModalIsVisible} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {httpRequest === "PUT" ? `Edit ${title}` : transactionType === "Income" ?
              "Add new Income" :
              "Add new Expenditure"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm
            title={title}
            setTitle={validateTitle}
            date={date}
            setDate={setDate}
            amount={amount}
            setAmount={validateAmount}
            frequency={frequency}
            setFrequency={(e) => setFrequency(e.target.value)}
            category={category}
            setCategory={(e) => setCategory(e.target.value)}
            transactionType={transactionType}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={closeModal}>
            Close
          </Button>
          <Button variant="outline-light" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

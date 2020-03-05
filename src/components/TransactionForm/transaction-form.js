import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TransactionForm(props) {
  return (
    <Form>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          maxLength={30}
          value={props.title}
          onChange={props.setTitle}
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <DatePicker selected={props.date} onChange={props.setDate} />
      </Form.Group>

      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          min={0}
          value={props.amount}
          onChange={props.setAmount}
        />
      </Form.Group>

      <Form.Group controlId="frequency">
        <Form.Label>Frequency</Form.Label>
        <Form.Control
          as="select"
          value={props.frequency}
          onChange={props.setFrequency}
        >
          <option>Single</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

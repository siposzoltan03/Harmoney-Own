import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function TransactionForm(props) {
    return (
        <Form>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={props.title} onChange={props.setTitle} />
                <Form.Text className="text-danger" id="error-title"/>
            </Form.Group>

            <Form.Group controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <DatePicker selected={props.date} onChange={props.setDate} />
                <Form.Text className="text-danger" id="error-date"/>
            </Form.Group>

            <Form.Group controlId="formBasicAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" value={props.amount} onChange={props.setAmount}/>
                <Form.Text className="text-danger" id="error-amount"/>
            </Form.Group>

            <Form.Group controlId="formBasicFrequency">
                <Form.Label>Frequency</Form.Label>
                <Form.Control as="select" value={props.frequency} onChange={props.setFrequency}>
                    <option>Single</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

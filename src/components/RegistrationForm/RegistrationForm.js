import React from 'react';
import { Form } from "react-bootstrap";

export function RegistrationForm() {
    return(
        <Form>
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Your first name" />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Your last name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@example.com" />
                <Form.Text className="text-danger" id="error-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-danger" id="error-password">
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default RegistrationForm;
import React from 'react';
import { Form } from "react-bootstrap";

export function LoginForm() {
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@example.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-danger" id="error-credentials">
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default LoginForm;
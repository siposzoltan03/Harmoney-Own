import React from 'react';
import { Form } from "react-bootstrap";

export function RegistrationForm(props) {
    return(
        <Form>
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Your first name" value={props.firstName} onChange={props.setFirstName}/>
                <Form.Text className="text-danger" id="error-first-name"/>
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Your last name" value={props.lastName} onChange={props.setLastName}/>
                <Form.Text className="text-danger" id="error-last-name"/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@example.com" value={props.email} onChange={props.setEmail}/>
                <Form.Text className="text-danger" id="error-email"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={props.password} onChange={props.setPassword}/>
                <Form.Text className="text-danger" id="error-password"/>
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={props.passwordConfirmation} onChange={props.setPasswordConfirmation} />
                <Form.Text className="text-danger" id="error-password-confirmation">
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default RegistrationForm;
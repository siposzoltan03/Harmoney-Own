import React from "react";
import { Form } from "react-bootstrap";

export function LoginForm(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@example.com" maxLength="320" value={props.email} onChange={props.setEmail}/>
        <Form.Text className="text-danger"/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" maxLength="20" value={props.password} onChange={props.setPassword}/>
        <Form.Text className="text-danger" id="error-credentials"/>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
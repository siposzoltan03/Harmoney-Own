import React, {
    useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalVisibilityContext } from "../../contexts/ModalVisibilityContext";
import { LoginForm } from "../LoginForm/LoginForm";

export function LoginModal(props) {
    const { logModal } = useContext(ModalVisibilityContext);
    const [registrationModalIsVisible, setRegistrationModalIsVisible] = logModal;

    const handleClose = () => setRegistrationModalIsVisible(false);

    return (
        <>
            <Modal show={registrationModalIsVisible}
                   onHide={handleClose}
                   {...props}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-light" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outline-light" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal

import React, {
    useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalVisibilityContext } from "../../contexts/ModalVisibilityContext";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import "./RegistrationModal.css";

export function RegistrationModal(props) {
    const { regModal } = useContext(ModalVisibilityContext);
    const [registrationModalIsVisible, setRegistrationModalIsVisible] = regModal;

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
                    <Modal.Title id="contained-modal-title-vcenter">Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegistrationForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-light" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegistrationModal;
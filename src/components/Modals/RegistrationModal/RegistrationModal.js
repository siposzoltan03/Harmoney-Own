import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { userToJson } from "../../../utils/createjson";

import { ModalVisibilityContext } from "../../../contexts/ModalVisibilityContext";
import { UserContext } from "../../../contexts/UserContext";
import { RegistrationForm } from "../../Forms/RegistrationForm/RegistrationForm";
import "./RegistrationModal.css";

export function RegistrationModal(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { regModal } = useContext(ModalVisibilityContext);
    const [registrationModalIsVisible, setRegistrationModalIsVisible] = regModal;

    const userContext = useContext(UserContext);
    const postRegistration = userContext.registration;

    const closeModal = () => {
        setRegistrationModalIsVisible(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    const handleSubmit = () => {
        const jsonData = userToJson(firstName, lastName, email, password)
        postRegistration(jsonData);
        setRegistrationModalIsVisible(false);
        closeModal();
    }

    return (
        <>
            <Modal show={registrationModalIsVisible}
                   onHide={closeModal}
                   {...props}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegistrationForm
                        firstName={firstName}
                        setFirstName={(e) => setFirstName(e.target.value)}
                        lastName={lastName}
                        setLastName={(e) => setLastName(e.target.value)}
                        email={email}
                        setEmail={(e) => setEmail(e.target.value)}
                        password={password}
                        setPassword={(e) => setPassword(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-light" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="outline-light" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegistrationModal;
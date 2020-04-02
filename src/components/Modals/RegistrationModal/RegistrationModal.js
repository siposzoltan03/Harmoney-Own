import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { userToJson } from "../../../utils/createjson";
import { store } from "react-notifications-component";

import { ModalVisibilityContext } from "../../../contexts/ModalVisibilityContext";
import { UserContext } from "../../../contexts/UserContext";
import { RegistrationForm } from "../../Forms/RegistrationForm/RegistrationForm";
import "./RegistrationModal.css";

export function RegistrationModal(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
    };

    const handleSubmit = async () => {
        const firstNameIsValid = validName("first");
        const lastNameIsValid =  validName("last");
        const emailIsValid = validEmail();
        const passwordIsValid = validPassword();
        const passwordConfirmationIsValid = validPasswordConfirmation();
        const submittable = firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid && passwordConfirmationIsValid;
        if(submittable) {
            const jsonData = userToJson(firstName, lastName, email, password);
            const registrationFailed = await postRegistration(jsonData);
            if (registrationFailed) {
                registrationFailureNotification();
            } else {
                registrationSuccessNotification();
                closeModal();
            }
        }
    };

    const registrationFailureNotification = () => {
        const notification = document.querySelector("#error-email");
        notification.textContent = "Email address is already taken";
    };

    const registrationSuccessNotification = () => {
        store.addNotification({
            title: "Success!",
            message: "Confirmation email has been sent, check your email account",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "flipInX"],
            animationOut: ["animated", "flipOutX"],
            dismiss: {
                duration: 3000
            }
        });
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        validName("first")
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        validName("last");
    };

    const validName = (name) => {
        const formId = name === "first" ? "#formBasicFirstName" : "#formBasicLastName";
        const notificationId = name === "first" ? "#error-first-name" : "#error-last-name";
        const maxLength = name === "first" ? 50 : 20;
        const currentName = document.querySelector(formId).value;
        const notification = document.querySelector(notificationId);
        const pattern = `^[a-zA-Z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ffőŐűŰ.,'\\s-]{1,${maxLength}}$`;
        if (currentName.length === 0) {
            notification.textContent = "This field is required";
            return false;
        }
        if (currentName.length > maxLength) {
            notification.textContent = `The ${name} name can't be longer than ${maxLength} characters`;
            return false;
        }
        if (currentName.match(pattern)) {
            notification.textContent = "";
            return true;
        }
        notification.textContent = `The ${name} name can't contain any number or special character`;
        return false;
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);
        validEmail();
    };

    const validEmail = () => {
        const currentEmail = document.querySelector("#formBasicEmail").value;
        const notification = document.querySelector("#error-email");
        const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
        if (currentEmail.length === 0) {
            notification.textContent = "This field is required";
            return false;
        }
        if (currentEmail.length > 320) {
            notification.textContent = "Email address can't be longer than 320 characters";
            return false;
        }
        if (currentEmail.match(pattern)) {
            notification.textContent = "";
            return true;
        } else {
            notification.textContent = "Please enter a valid email address ie. e_xa-+mp.le%@example.com";
            return false;
        }
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        validPassword();
        validPasswordConfirmation();
    };

    const validPassword = () => {
        const currentPassword = document.querySelector("#formBasicPassword").value;
        const notification = document.querySelector("#error-password");
        const pattern = "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-])(?!.*?[\\s\"˘°˛`˙´˝¨¤]).{4,20}$";
        const exclusionPattern = "[\\s\"˘°˛`˙´˝¨¤]$";
        if(currentPassword.length === 0) {
            notification.textContent = "This field is required";
            return false;
        }
        if (currentPassword.match(exclusionPattern)) {
            notification.textContent = "The password can't contain other special characters than #?!@$%^&*_-";
            return false;
        }
        if (currentPassword.length < 4) {
            notification.textContent = "The password must be at least 4 characters long";
            return false;
        }
        if (currentPassword.length > 20) {
            notification.textContent = "Password can't be longer than 20 characters";
            return false;
        }
        if (currentPassword.match(pattern)) {
            notification.textContent = "";
            return true;
        }
        notification.textContent = "The password must contain at least one uppercase letter, one lowercase letter, one number and a special character";
        return false;
    };

    const validatePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
        validPasswordConfirmation();
    };

    const validPasswordConfirmation = () => {
        const currentPassword = document.querySelector("#formBasicPassword").value;
        const confirmationPassword = document.querySelector("#formBasicPasswordConfirmation").value;
        const notification = document.querySelector("#error-password-confirmation");
        if (confirmationPassword.length === 0) {
            notification.textContent = "This field is required";
            return false;
        }
        if (currentPassword === confirmationPassword) {
            notification.textContent = "";
            return true;
        }
        notification.textContent = "Passwords don't match";
        return false;
    };

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
                        setFirstName={validateFirstName}
                        lastName={lastName}
                        setLastName={validateLastName}
                        email={email}
                        setEmail={validateEmail}
                        password={password}
                        setPassword={validatePassword}
                        passwordConfirmation={passwordConfirmation}
                        setPasswordConfirmation={validatePasswordConfirmation}
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
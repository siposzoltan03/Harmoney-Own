import React from 'react';
import RegistrationModal from '../../components/Modals/RegistrationModal/RegistrationModal';
import TransactionModal from '../../components/Modals/TransactionModal/TransactionModal';
import LoginModal from "../../components/Modals/LoginModal/LoginModal";


export default function ModalContainer() {
    return (
        <>
            <RegistrationModal/>
            <LoginModal/>
            <TransactionModal/>
        </>
    )
}

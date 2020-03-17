import React from 'react';
import RegistrationModal from '../../components/Modals/RegistrationModal/RegistrationModal';
import LoginModal from '../../components/Modals/LoginModal/LoginModal';
import TransactionModal from '../../components/Modals/TransactionModal/TransactionModal';


export default function ModalContainer() {
    return (
        <>
            <RegistrationModal/>
            <LoginModal/>
            <TransactionModal/>
        </>
    )
}

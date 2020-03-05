import React, { useState } from "react";

export const ModalVisibilityContext = React.createContext();

export const ModalVisibilityContextProvider = props => {
    const [registrationModalIsVisible, setRegistrationModalIsVisible] = useState(false);
    const [loginModalIsVisible, setLoginModalIsVisible] = useState(false);

    return (
        <ModalVisibilityContext.Provider
            value={{ regModal: [registrationModalIsVisible, setRegistrationModalIsVisible], logModal: [loginModalIsVisible, setLoginModalIsVisible] }}
        >
            {props.children}
        </ModalVisibilityContext.Provider>
    );
};
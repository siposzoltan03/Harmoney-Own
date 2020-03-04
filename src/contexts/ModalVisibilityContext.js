import React, { useState } from "react";

export const ModalVisibilityContext = React.createContext();

export const ModalVisibilityContextProvider = props => {
    const [registrationModalIsVisible, setRegistrationModalIsVisible] = useState(false);

    return (
        <ModalVisibilityContext.Provider
            value={{ regModal: [registrationModalIsVisible, setRegistrationModalIsVisible] }}
        >
            {props.children}
        </ModalVisibilityContext.Provider>
    );
};
import React, { useState } from 'react';
import Axios from "axios";
import Globals from "../utils/globals";


const registrationUrl = Globals.fetchUrl + "/api/users/registration";
const loginUrl = Globals.fetchUrl + "/api/users/login";


export const UserContext = React.createContext(undefined, undefined);

export const UserProvider = (props) => {
    const [user, setUser] = useState();

    const postRegistration = (data) => {
        try {
            Axios.post(registrationUrl, data, { headers: {
                'Content-Type': 'application/json',
            }})
        } catch (e) {
            console.log('Error:', e);
        }
    }

    const postLogin = (data) => {
        try {
            Axios.post(loginUrl, data, { headers: {
                'Content-Type': 'application/json',
            }})
            .then(resp => setUser(resp.data))
        } catch (e) {
            console.log('Error:', e);
        }
    }

    return (
        <UserContext.Provider value={{ user : [user, setUser ], registration: postRegistration, postLogin: postLogin }}>
            {props.children}
        </UserContext.Provider>
    )
}

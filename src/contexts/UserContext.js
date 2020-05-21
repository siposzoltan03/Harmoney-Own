import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Globals from "../utils/globals";

const registrationUrl = Globals.fetchUrl + "/api/users";
const loginUrl = Globals.fetchUrl + "/api/auth";
const logoutUrl = Globals.fetchUrl + "/api/auth/logout";
const currentUserUrl = Globals.fetchUrl + "/api/users/me";

export const UserContext = React.createContext(undefined, undefined);

export const UserProvider = (props) => {
    // const [users, setUsers] = useState([]);
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user == null && jwtToken != null) {
            (async () => {
                let currentUser = await getCurrentUser(jwtToken);
                setUser(currentUser);
            })();
        }
    }, [user, setUser, jwtToken]);

    const postRegistration = async (data) => {
        return await Axios.post(registrationUrl, data, { headers: {
                'Content-Type': 'application/json',
            }})
            .then(resp => {
                return !(resp.data.firstName && resp.data.lastName && resp.data.email && resp.data.email === JSON.parse(data).email);
            })
            .catch (e => {
                console.log('Error:', e);
                return true;
            })
    };

    const postLogin = async (data) => {
        return await Axios.post(loginUrl, data, { headers: {
                'Content-Type': 'application/json',
            }})
            .then(resp => {
                if (resp.data.user.firstName && resp.data.user.lastName && resp.data.user.email && resp.data.user.email === JSON.parse(data).email) {
                    localStorage.setItem("token", resp.data.token);
                    setJwtToken(resp.data.token);
                    setUser(resp.data.user);
                    return false;
                }
                return true;
            })
            .catch (e => {
                console.log('Error:', e);
                return true;
            })
    };

    const postLogout = async (data) => {
        return await Axios.post(logoutUrl, data, { headers: {
                'Content-Type': 'application/json',
                'x-auth-token': `${localStorage.getItem("token")}`
            }})
            .then(resp => {
                return false;
            })
            .catch (e => {
                console.log('Error:', e);
                return true;
            })
    };

    async function getCurrentUser(jwtToken){
        return await Axios.get(currentUserUrl,
            {withCredentials: true,
                headers:{'Content-Type': 'application/json',
                    'x-auth-token': jwtToken}})
            .then(resp => {
                return resp.data;
            })
            .catch (e => {
                console.log('Error:', e);
                return null;
            })
    }

    return (
        <UserContext.Provider value={{ user : [user, setUser ], jwt: [jwtToken, setJwtToken], registration: postRegistration, login: postLogin, logout: postLogout }}>
            {props.children}
        </UserContext.Provider>
    )
};

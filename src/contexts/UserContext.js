import React, { useState } from 'react';
import Axios from "axios";
import Globals from "../utils/globals";

const registrationUrl = Globals.fetchUrl + "/api/account/register";
const loginUrl = Globals.fetchUrl + "/api/account/login";
const logoutUrl = Globals.fetchUrl + "/api/account/logout";
const currentUserUrl = Globals.fetchUrl + "/api/account/currentuser";

export const UserContext = React.createContext(undefined, undefined);

export const UserProvider = (props) => {
    let jwt = localStorage.getItem("token");
    let currentUser;
    if (jwt === null) currentUser = null;
    else currentUser = getCurrentUser(jwt);

    const [user, setUser] = useState(currentUser);

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
    }

    const postLogin = async (data) => {
        return await Axios.post(loginUrl, data, { withCredentials: true, headers: {
            'Content-Type': 'application/json',
        }})
        .then(resp => {
            if (resp.data.firstName && resp.data.lastName && resp.data.email && resp.data.email === JSON.parse(data).email) {
                localStorage.setItem("token", resp.data.token);
                setUser(resp.data);
                return false;
            }
            return true;
        })
        .catch (e => {
            console.log('Error:', e);
            return true;
        })
    }

    const postLogout = async (data) => {
        return await Axios.post(logoutUrl, data, { headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }})
            .then(resp => {
                return false;
            })
            .catch (e => {
                console.log('Error:', e);
                return true;
            })
    }

    async function getCurrentUser(jwt){
        if(jwt === null) return null;
        return await Axios.post(currentUserUrl, {"tokenString": jwt},
            {withCredentials:true,
                headers:{'Content-Type': 'application/json',}})
            .then(resp => setUser(resp.data))

    }

    return (
        <UserContext.Provider value={{ user : [user, setUser ], registration: postRegistration, login: postLogin, logout: postLogout }}>
            {props.children}
        </UserContext.Provider>
    )
}

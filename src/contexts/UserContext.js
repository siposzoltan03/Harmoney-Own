import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Globals from "../utils/globals";
import {useSnackbar} from "notistack";

const registrationUrl = Globals.fetchUrl + "/api/users";
const loginUrl = Globals.fetchUrl + "/api/auth";
const logoutUrl = Globals.fetchUrl + "/api/auth/logout";
const currentUserUrl = Globals.fetchUrl + "/api/users/me";
const updateUserUrl = Globals.fetchUrl + "/api/auth/update";
const allUserUrl = Globals.fetchUrl + "/api/auth/all_user";

export const UserContext = React.createContext(undefined, undefined);

export const UserProvider = (props) => {
    // const [users, setUsers] = useState([]);
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [allUser, setAllUser] = useState([]);
    const {enqueueSnackbar} = useSnackbar();


    useEffect(() => {
        if (user == null && jwtToken != null) {
            (async () => {
                let currentUser = await getCurrentUser(jwtToken);
                setUser(currentUser);
                setAllUser(await getAllUser());
            })();
        }
    }, [user, setUser, jwtToken]);

    const postRegistration = async (data) => {
        return await Axios.post(registrationUrl, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => {
                return !(resp.data.firstName && resp.data.lastName && resp.data.email && resp.data.email === JSON.parse(data).email);
            })
            .catch(e => {
                console.log('Error:', e);
                return true;
            })
    };

    const postLogin = async (data) => {
        return await Axios.post(loginUrl, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => {
                if (resp.data.user.firstName && resp.data.user.lastName && resp.data.user.email && resp.data.user.email === JSON.parse(data).email) {
                    localStorage.setItem("token", resp.data.token);
                    setJwtToken(resp.data.token);
                    setUser(resp.data.user);
                    enqueueSnackbar('Login successful', {variant: 'success'});
                    return false;
                }
                return true;
            })
            .catch(e => {
                console.log('Error:', e);
                return true;
            })
    };

    const postLogout = async (data) => {
        return await Axios.post(logoutUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': `${localStorage.getItem("token")}`
            }
        })
            .then(resp => {
                enqueueSnackbar('Logout successful', {variant: 'success'});
                return false;
            })
            .catch(e => {
                console.log('Error:', e);
                return true;
            })
    };

    async function getCurrentUser(jwtToken) {
        return await Axios.get(currentUserUrl,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': jwtToken
                }
            })
            .then(resp => {
                return resp.data;
            })
            .catch(e => {
                console.log('Error:', e);
                return null;
            })
    }

    async function getAllUser() {
        return await Axios.get(allUserUrl, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': jwtToken
            }
        })
            // .then(res => console.log(res))
            .then(res => {
                return res.data;
            });
    }

    const updateUser = async (data, id) => {
        return await Axios.put(updateUserUrl + `/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': `${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                    setUser(res.data.user);
                    enqueueSnackbar('Profile updated successfully', {variant: 'success'});
                }
            )
            .catch(e => {
                console.log(e);
                enqueueSnackbar('Update failed', {variant: 'error'});
            });

    };

    return (
        <UserContext.Provider value={{
            user: [user, setUser],
            jwt: [jwtToken, setJwtToken],
            allUser: [allUser, setAllUser],
            registration: postRegistration,
            login: postLogin,
            logout: postLogout,
            updateUser: updateUser,
            getAllUser: getAllUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
};

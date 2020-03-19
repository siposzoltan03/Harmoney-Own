import React, { useContext } from "react";
import { UserContext} from "../../contexts/UserContext";
import { Button } from 'react-bootstrap';
import "./User.css"

export function User() {
    const { user, logout } = useContext(UserContext);
    const [userLoggedIn, setUserLoggedIn] = user;

    const handleLogout = async () => {
        const data = JSON.stringify(userLoggedIn);
        console.log(data);
        const logoutFailed = await logout(data);
        if (!logoutFailed) {
            setUserLoggedIn(null)
        }
    }

    if (userLoggedIn) {
        return(
            <span className="user">
                <i className="fas fa-user"/>
                <p id="username">{userLoggedIn.firstName}</p>
                <Button id="user-sign-out" onClick={handleLogout}>Sign out</Button>
            </span>
        )
    } else {
        return (
            <div className="user"/>
        )
    }
}

export default User;

import React, { useContext } from "react";
import { UserContext} from "../../contexts/UserContext";
import { Button } from 'react-bootstrap';
import "./User.css"

export function User() {
    const { user } = useContext(UserContext);
    const [userLoggedIn, setUserLoggedIn] = user;
    const handleLogout = () => setUserLoggedIn(null);

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

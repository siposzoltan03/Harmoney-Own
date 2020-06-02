import React, {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import "./User.css"
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Avatar} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DefaultAvatar from '../../assets/img/avatar.jpg'


export function User() {
    const { user, logout, jwt } = useContext(UserContext);
    const [userLoggedIn, setUserLoggedIn] = user;
    const setJwtToken = jwt[1];

    const handleLogout = async () => {
        const data = JSON.stringify(userLoggedIn);
        const logoutFailed = await logout(data);
        if (!logoutFailed) {
            localStorage.removeItem("token");
            setJwtToken(null);
            setUserLoggedIn(null)
        }
    };

    if (userLoggedIn) {
        return (
            <div>
                <Link to={`/user/${userLoggedIn.firstName + userLoggedIn.lastName + userLoggedIn._id}`}>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar alt={userLoggedIn.firstName} src={userLoggedIn?.profileImage !== '' ? userLoggedIn?.profileImage : DefaultAvatar}/>
                        </ListItemIcon>
                        <ListItemText primary={userLoggedIn.firstName}/>
                    </ListItem>
                </Link>
                <Link to={'/'}>
                    <ListItem button onClick={() => handleLogout()}>
                        <ListItemIcon>
                            <ExitToAppIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Log out"/>
                    </ListItem>
                </Link>
            </div>

        )
    } else {
        return (
            <div className="user"/>
        )
    }
}

export default User;

import React, {useContext, useState} from "react";
import {UserContext} from "../../contexts/UserContext"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Avatar} from "@material-ui/core";
import DefaultAvatar from "../../assets/img/avatar.jpg";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



function Friends(props){
    const {allUser} = useContext(UserContext);
    const [friends, setFriends] = useState([]);
    // const getAllUser = appContext.getAllUser;
    const Users = allUser[0];

    return(
        <div>
            {Users?.map(user =>
                <Link to={`/user/${user._id}`} key={user._id}>
                    <ListItem style={{display: props.show}}>
                        <ListItemIcon>
                            <Avatar alt={user.firstName} src={user?.profileImage !== '' ? user?.profileImage : DefaultAvatar}/>
                        </ListItemIcon>
                        <ListItemText primary={user.firstName}/>
                        <ListItemIcon>
                            <AddCircleOutlineIcon onClick={props.onClick} id={user._id}/>
                        </ListItemIcon>
                    </ListItem>
                </Link>
            )}
        </div>
    )
}

export default Friends;
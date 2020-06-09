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

    return (
        <div>
            {Users?.map(user =>

                <ListItem style={{display: props.show, justifyContent: 'space-between'}}>
                    <ListItemIcon>
                        <Avatar alt={user.firstName}
                                src={user?.profileImage !== '' ? user?.profileImage : DefaultAvatar}/>
                    </ListItemIcon>
                    <Link to={`/user/${user._id}`} key={user._id}>
                        <ListItemText primary={`${user.firstName} ${user.lastName}`} />
                    </Link>
                    <ListItemIcon>
                        <div style={{cursor: "pointer"}} className="fab fa-creative-commons-sampling-plus fa-3x"
                             onClick={() => sendFriendRequest(user._id)}/>
                    </ListItemIcon>
                </ListItem>
            )}
        </div>
    )
}

export default Friends;
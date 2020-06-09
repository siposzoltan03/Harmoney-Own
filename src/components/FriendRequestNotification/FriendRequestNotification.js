import React, {useContext} from "react";
import {Avatar, Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import Badge from "@material-ui/core/Badge";
import HighlightOffOutlined from "@material-ui/icons/HighlightOffOutlined";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import {FriendRequestContext} from "../../contexts/FriendRequestContext";
import Divider from "@material-ui/core/Divider";
import DefaultAvatar from "../../assets/img/avatar.jpg";


const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
    root: props => ({
        display: 'flex',
        background: props.background,
        padding: theme.spacing(2),
    }),
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        '&:hover': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
    },
}));

function FriendRequestNotification(props) {
    const classes = useStyles(props);
    const appContext = useContext(FriendRequestContext);
    const deleteNotification = appContext.deleteNotification;
    const addFriend = appContext.addFriend;

    async function handleAddFriend(id) {
        console.log('Adding friend');
        const result = await addFriend(id);
        if(result.status === 200){
        await deleteNotification(id);
        }
    }

    return (
        <div>
            <div className={classes.root} id={props.id}>
                <Avatar alt={props.firstName} src={props?.profileImage !== '' ? props?.profileImage : DefaultAvatar}/>
                <Typography className={classes.typography}>
                    You have a friend request from <br/>{props.firstName} {props.lastName}
                </Typography>
                <Button color={"primary"} onClick={() => handleAddFriend(props.id)}>
                    <CheckCircleOutlineOutlinedIcon/>
                </Button>
                <Button color={"secondary"} onClick={() => deleteNotification(props.id)}>
                    <HighlightOffOutlined/>
                </Button>
            </div>
            <Divider/>
        </div>
    )
}

export default FriendRequestNotification;
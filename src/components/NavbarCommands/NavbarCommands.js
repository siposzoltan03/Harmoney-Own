import React, {useContext, useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import CreditCardIcon from '@material-ui/icons/CreditCard'
import AssignmentIcon from '@material-ui/icons/Assignment';
import {UserContext} from '../../contexts/UserContext'
import {Avatar} from "@material-ui/core";
import User from "../User/User";
import {Link} from 'react-router-dom'
import Badge from "@material-ui/core/Badge";
import MessageIcon from '@material-ui/icons/Message';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PopoverMenu from "../PopoverMenu/PopoverMenu"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {FriendRequestContext} from "../../contexts/FriendRequestContext";
import FriendRequestNotification from "../FriendRequestNotification/FriendRequestNotification";
// import Popover from "react-popover/source";


const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const NavbarCommands = () => {
    const classes = useStyles();
    const [anchorElNotifications, setAnchorElNotifications] = useState(null);
    const [anchorElMessages, setAnchorElMessages] = useState(null);
    const [openNotifications, setOpenNotifications] = useState(false);
    const [openMessages, setOpenMessages] = useState(false);
    const appContext = useContext(FriendRequestContext);
    const notifications = appContext.notifications[0];
    const [notificationCount, setNotificationCount] = appContext.notificationCount;
    const setNotificationsSeen = appContext.setNotificationsSeen;
    const deleteNotification = appContext.deleteNotification;

    const handleClickNotifications = async (event) => {
        setAnchorElNotifications(event.currentTarget);
        setOpenNotifications(!openNotifications);
        setNotificationCount(0);
        await setNotificationsSeen();

    };

    const handleCloseNotifications = () => {
        setAnchorElNotifications(null);
    };

    const handleClickMessages = (event) => {
        setAnchorElMessages(event.currentTarget);
        setOpenMessages(!openMessages);
    };

    const handleCloseMessages = () => {
        setAnchorElMessages(null);
    };

    return (
        <div>
            <Link to={'/dashboard'}>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
            </Link>
            <Link to={'/transactions'}>
                <ListItem button>
                    <ListItemIcon>
                        <CreditCardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Transactions"/>
                </ListItem>
            </Link>
            {/*<ListItem button>*/}
            {/*    <ListItemIcon>*/}
            {/*        <PeopleIcon />*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="User" />*/}
            {/*</ListItem>*/}
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Reports"/>
            </ListItem>
            <ListItem button
                      onClick={handleClickMessages}>
                <ListItemIcon>
                    <MessageIcon/>
                </ListItemIcon>
                <ListItemText primary="Messages"/>
                <PopoverMenu open={openMessages}
                             onClose={handleCloseMessages}
                             anchorEl={anchorElMessages}
                             title={"Messages"}
                >
                    {['Teszt', 'Teszt2'].map((element, index) =>
                        <Typography className={classes.typography} key={index}>
                            {element}
                        </Typography>
                    )}
                </PopoverMenu>
            </ListItem>
            <ListItem button
                // variant={"contained"}
                // aria-describedby={id}
                      onClick={handleClickNotifications}>
                <ListItemIcon>
                    <Badge badgeContent={notificationCount} color={"secondary"}>
                        <NotificationImportantIcon/>
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="Notifications"/>
                <PopoverMenu open={openNotifications}
                             onClose={handleCloseNotifications}
                    // id={id}
                             anchorEl={anchorElNotifications}
                             title={"Notifications"}
                >
                    {notifications?.map(notification =>
                        // <Typography className={classes.typography} key={notifications._id}>
                        //     {notifications.firstName}
                        // </Typography>
                        <FriendRequestNotification
                            id={notification.user._id}
                            key={notification.user._id}
                            imageUrl={notification.user?.profileImage}
                            firstName={notification.user.firstName}
                            lastName={notification.user.lastName}
                            background={notification.seen ? 'white' : 'grey'}
                        />
                    )}

                </PopoverMenu>
                {/*<Popover body={['valami']}/>*/}
            </ListItem>
            <User/>
        </div>
    )
};

// export const secondaryListItems = (
// <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//         <ListItemIcon>
//             <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//         <ListItemIcon>
//             <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//         <ListItemIcon>
//             <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Year-end sale" />
//     </ListItem>
// </div>
// );

export default NavbarCommands;
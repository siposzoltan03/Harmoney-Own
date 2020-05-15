import React, {useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import CreditCardIcon from '@material-ui/icons/CreditCard'
import AssignmentIcon from '@material-ui/icons/Assignment';
import {UserContext} from '../../contexts/UserContext'
import {Avatar} from "@material-ui/core";
import User from "../User/User";
import {Link} from 'react-router-dom'
import Badge from "@material-ui/core/Badge";
import MessageIcon from '@material-ui/icons/Message';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';


const MainListItems = () => {
    return (
        <div>
            <Link to={'/dashboard'}>
                <ListItem button onClick={console.log('Dashboard')}>
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
            <ListItem button>
                <ListItemIcon>
                    <MessageIcon/>
                </ListItemIcon>
                <ListItemText primary="Messages"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Badge badgeContent={2} color={"secondary"}>
                        <NotificationImportantIcon/>
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="Notifications"/>
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

export default MainListItems;
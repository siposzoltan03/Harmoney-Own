import React from "react";
import Popover from '@material-ui/core/Popover';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const PopoverMenu = (props) => {
    const classes = useStyles();
    return (
        <Popover
            id={props.id}
            onClose={props.handleClose}
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={props.open}>
            <Typography variant="h6" className={classes.typography}>
                {props.title}
            </Typography>
            <Divider/>
            {props.children}
        </Popover>
    )
};

export default PopoverMenu;
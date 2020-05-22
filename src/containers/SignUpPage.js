import React, {useContext, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {UserContext} from "../contexts/UserContext";
import {userToJson, userToJsonLogin} from "../utils/createjson";
import {useHistory} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp() {
    const history = useHistory();
    const classes = useStyles();

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });

    const userContext = useContext(UserContext);
    const postRegistration = userContext.registration;

    const handleSubmit = async () => {
        const firstNameIsValid = true;
        const lastNameIsValid = true;
        const emailIsValid = true;
        const passwordIsValid = true;
        const passwordConfirmationIsValid = true;
        const submittable = firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid && passwordConfirmationIsValid;
        if(submittable) {
            const jsonData = userToJson(state.firstName, state.lastName, state.email, state.password);
            const registrationFailed = await postRegistration(jsonData);
            if (registrationFailed) {
                history.push('/registration');
            } else {
                history.push('/');
            }
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };

    const validName = (name) => {
        const result = {
            "isValid": false,
            "errorText": ""
        };
        const maxLength = name === state.firstName ? 20 : 50;
        const currentName = name;
        const pattern = `^[a-zA-Z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ffőŐűŰ.,'\\s-]{1,${maxLength}}$`;


        if (currentName.match(pattern)) {
            result.isValid = true;
        }else{
            result.errorText = `The ${name} name can't contain any number or special character`;
        }
        if (currentName.length > maxLength) {
            result.errorText =`The ${name} name can't be longer than ${maxLength} characters`;
        }
        if (currentName.length === 0) {
            result.errorText = "This field is required";
        }
        return result;
    };


    const validEmail = () => {
        const result = {
            isValid: false,
            errorText: ""
        };
        const currentEmail = state.email;
        const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

        if (currentEmail.match(pattern)) {
            result.errorText = "";
            result.isValid = true;
        } else {
            result.errorText = "Please enter a valid email address ie. e_xa-+mp.le%@example.com";
            result.isValid = false;
        }
        if (currentEmail.length === 0) {
            result.errorText = "This field is required";
            result.isValid = false;
        }
        if (currentEmail.length > 320) {
            result.errorText = "Email address can't be longer than 320 characters";
            result.isValid = false;
        }
        return result;
    };


    const validPassword = () => {
        const currentPassword = document.querySelector("#formBasicPassword").value;
        const notification = document.querySelector("#error-password");
        const pattern = "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-])(?!.*?[\\s\"˘°˛`˙´˝¨¤]).{4,20}$";
        const exclusionPattern = "[\\s\"˘°˛`˙´˝¨¤]$";
        if(currentPassword.length === 0) {
            notification.textContent = "This field is required";
            return false;
        }
        if (currentPassword.match(exclusionPattern)) {
            notification.textContent = "The password can't contain other special characters than #?!@$%^&*_-";
            return false;
        }
        if (currentPassword.length < 4) {
            notification.textContent = "The password must be at least 4 characters long";
            return false;
        }
        if (currentPassword.length > 20) {
            notification.textContent = "Password can't be longer than 20 characters";
            return false;
        }
        if (currentPassword.match(pattern)) {
            notification.textContent = "";
            return true;
        }
        notification.textContent = "The password must contain at least one uppercase letter, one lowercase letter, one number and a special character";
        return false;
    };


    const validPasswordConfirmation = () => {
        const currentPassword = document.querySelector("#formBasicPassword").value;
        const confirmationPassword = document.querySelector("#formBasicPasswordConfirmation").value;
        const notification = document.querySelector("#error-password-confirmation");
        if (confirmationPassword.length === 0) {
            notification.textContent = "This field is required";
            return false;
        }
        if (currentPassword === confirmationPassword) {
            notification.textContent = "";
            return true;
        }
        notification.textContent = "Passwords don't match";
        return false;
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleInputChange}
                                error={!validName(state.firstName).isValid}
                                helperText={validName(state.firstName).errorText}
                                value={state.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleInputChange}
                                error={!validName(state.lastName).isValid}
                                helperText={validName(state.lastName).errorText}
                                value={state.lastName}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleInputChange}
                                error={!validEmail().isValid}
                                helperText={validEmail().errorText}
                                value={state.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password-confirmation"
                                label="Password Confirmation"
                                type="password"
                                id="password-confirmation"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={() => handleSubmit()}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to={'/'} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}
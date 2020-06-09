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
import {userToJson} from "../utils/createjson";
import {useHistory} from "react-router-dom";
import {validName, validEmail, validPassword, validPasswordConfirmation} from "../utils/inputValidator"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="/">
                Harmoney
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
        if (submittable) {
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
                                error={!validName(state.firstName, state).isValid}
                                helperText={validName(state.firstName, state).errorText}
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
                                error={!validName(state.lastName, state).isValid}
                                helperText={validName(state.lastName, state).errorText}
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
                                error={!validEmail(state).isValid}
                                helperText={validEmail(state).errorText}
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
                                error={!validPassword(state).isValid}
                                helperText={validPassword(state).errorText}
                                value={state.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="passwordConfirmation"
                                label="Password Confirmation"
                                type="password"
                                id="password-confirmation"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                                error={!validPasswordConfirmation(state).isValid}
                                helperText={validPasswordConfirmation(state).errorText}
                                value={state.passwordConfirmation}
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
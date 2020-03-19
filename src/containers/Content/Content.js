import React, {useContext} from 'react';
import { UserContext } from "../../contexts/UserContext";
import Dashboard from "../../components/Dashboard/Dashboard";
import WelcomePage from "../../components/WelcomePage/WelcomePage";

function Content() {
    const { user } = useContext(UserContext);
    const userLoggedIn = user[0];

    if (userLoggedIn) {
        return (<Dashboard/>)
    } else {
        return (<WelcomePage />)
    }
}

export default Content;
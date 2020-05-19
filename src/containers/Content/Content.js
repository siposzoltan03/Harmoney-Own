import React, {useContext} from 'react';
import { UserContext } from "../../contexts/UserContext";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import Transactions from "../../components/Transactions/Transactions";

function Content() {
    const { user } = useContext(UserContext);
    const userLoggedIn = user[0];

    if (userLoggedIn) {
        return (<Transactions/>)
    } else {
        return (<WelcomePage />)
    }
}

export default Content;
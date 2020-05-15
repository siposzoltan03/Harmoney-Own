import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/Navbar";
import TopBar from "react-bootstrap/Nav";
import {ModalVisibilityContextProvider} from "../../contexts/ModalVisibilityContext";
import ModalContainer from "../ModalContainer/ModalContainer";
import Footer from "../../components/Footer/Footer";
import {TransactionProvider} from "../../contexts/TransactionContext";
import {UserProvider} from "../../contexts/UserContext";
import User from "../../components/User/User";
import Content from "../Content/Content";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import Dashboard from "../../components/Dashboard/Dashboard";
import Navbar from "../../components/Navbar/Navbar"
import NavbarContainer from "../../components/NavbarContainer/NavbarContainer";
import SignInPage from "../../components/SignInPage";
import SignUpPage from "../../components/SignUpPage/SignUpPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage"


function App() {
    return (
        <Router>
            <UserProvider>
                <TransactionProvider>
                    <Switch>
                        <Route path={`/transactions`}>
                            <TransactionProvider>
                                <ModalVisibilityContextProvider>
                                    <Navbar title="Transactions">
                                        <Content/>
                                    </Navbar>
                                </ModalVisibilityContextProvider>
                            </TransactionProvider>
                        </Route>
                        <Route path={`/user`}>
                            <TransactionProvider>
                                <ModalVisibilityContextProvider>
                                    <Navbar title={"Users"}>
                                        <ProfilePage/>
                                    </Navbar>
                                </ModalVisibilityContextProvider>
                                {/*<UserPage/>*/}
                            </TransactionProvider>
                        </Route>
                        <Route path='/dashboard'>
                            <TransactionProvider>
                                <Navbar title={"Dashboard"}>
                                    <Dashboard/>
                                </Navbar>
                            </TransactionProvider>
                        </Route>
                        <Route path={'/registration'}>
                            <SignUpPage/>
                        </Route>
                        <Route path={'/'}>
                            <SignInPage/>
                        </Route>
                    </Switch>
                </TransactionProvider>
            </UserProvider>
        </Router>
    );
}

export default App;

import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/Navbar";
import TopBar from "react-bootstrap/Nav";
import Dashboard from "../../components/Dashboard/Dashboard";
import {ModalVisibilityContextProvider} from "../../contexts/ModalVisibilityContext";
import ModalContainer from "../ModalContainer/ModalContainer";
import Footer from "../../components/Footer/Footer";
import {TransactionProvider} from "../../contexts/TransactionContext";
import { UserProvider } from "../../contexts/UserContext";
import User from "../../components/User/User";


function App() {
    return (
        <TransactionProvider>
        <UserProvider>
        <ModalVisibilityContextProvider>
            <div className="App">
                <TopBar className="justify-content-center ml-32">
                    <h1 id="topBar-title">Harmoney</h1>
                    <User/>
                </TopBar>
                <SideBar/>
                <Dashboard/>
                <ModalContainer/>
                <Footer className="ml-32" />
            </div>
        </ModalVisibilityContextProvider>
        </UserProvider>
        </TransactionProvider>
    );
}

export default App;

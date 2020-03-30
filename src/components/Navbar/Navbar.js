import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Navbar.css"

import React, { useContext } from "react";
import { ModalVisibilityContext } from "../../contexts/ModalVisibilityContext";
import {UserContext} from "../../contexts/UserContext";
import {TransactionContext} from "../../contexts/TransactionContext";

export const Navbar = () => {
  const transactionContext = useContext(TransactionContext);
  const { regModal, logModal, transactionModal, transactionModalType } = useContext(ModalVisibilityContext);
  const setRegistrationModalIsVisible = regModal[1];
  const setLoginModalIsVisible = logModal[1];
  const setTransactionModalIsVisible = transactionModal[1];
  const setTransactionType = transactionModalType[1];
  const { user } = useContext(UserContext);
  const userLoggedIn = user[0];
  const setHttpRequest = transactionContext.httpRequest[1];

  return (
    <SideNav
      onSelect={selected => {
        // Eventkey value passed to the onSelect handler,
        // useful for identifying the selected navigation item.
        switch (selected) {
          case "user-registration":
            setRegistrationModalIsVisible(true);
            break;
          case "user-login":
            setLoginModalIsVisible(true);
            break;
          case "income":
            setTransactionType("Income");
            setTransactionModalIsVisible(true);
            setHttpRequest("POST");
            break;
          case "expenditure":
            setTransactionType("Expenditure");
            setTransactionModalIsVisible(true);
            setHttpRequest("POST");
            break;
          default:
          // code block
        }
      }}
    >
      <Toggle />
      <Nav defaultSelected="home">

        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>

        {userLoggedIn ?
          <NavItem eventKey="income">
            <NavIcon>
              <i className="fa fa-plus" style={{fontSize: "1.75em"}}/>
            </NavIcon>
            <NavText>Add Income</NavText>
          </NavItem> : ""}

        {userLoggedIn ?
          <NavItem eventKey="expenditure">
            <NavIcon>
              <i className="fa fa-minus" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Add Expenditure</NavText>
          </NavItem> : ""}

        {!userLoggedIn ?
          <NavItem eventKey="user-registration">
            <NavIcon>
              <i className="fas fa-user-plus" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Registration</NavText>
          </NavItem>: ""}

        {!userLoggedIn ?
          <NavItem eventKey="user-login">
            <NavIcon>
              <i className="fas fa-user-check" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Login</NavText>
          </NavItem> : ""}

      </Nav>
    </SideNav>
  );
};

export default Navbar;
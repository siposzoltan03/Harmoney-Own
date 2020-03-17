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

export const Navbar = () => {
  const { regModal, logModal, transactionModal, transactionModalType } = useContext(ModalVisibilityContext);
  const setRegistrationModalIsVisible = regModal[1];
  const setLoginModalIsVisible = logModal[1];
  const setTransactionModalIsVisible = transactionModal[1];
  const setTransactionType = transactionModalType[1];

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
            break;
          case "expenditure":
            setTransactionType("Expenditure");
            setTransactionModalIsVisible(true);
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

        <NavItem eventKey="user-registration">
          <NavIcon>
            <i className="fas fa-user-plus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Registration</NavText>
        </NavItem>

        <NavItem eventKey="user-login">
          <NavIcon>
            <i className="fas fa-user-check" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Login</NavText>
        </NavItem>

        <NavItem  eventKey="income">
          <NavIcon>
            <i className="fa fa-plus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Add Income</NavText>
        </NavItem>
        
        <NavItem eventKey="expenditure">
          <NavIcon>
            <i className="fa fa-minus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Add Expenditure</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};

export default Navbar;
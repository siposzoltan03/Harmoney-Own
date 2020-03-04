import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React, { useState } from "react";
import TransactionModal from "../Modal/transaction-modal";

export const Navbar = () => {
  const [transactionmodalDisplay, setTransactionModalDisplay] = useState(false);
  const [transactionType, setTransactionType] = useState();

  return (
    <SideNav
      onSelect={selected => {
        // Eventkey value passed to the onSelect handler,
        // useful for identifying the selected navigation item.
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
        <NavItem
          eventKey="income"
          onClick={() => {
            setTransactionType("income");  
            setTransactionModalDisplay(true);
        }}
        >
          <NavIcon>
            <i className="fa fa-plus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Add Income</NavText>
        </NavItem>
        <NavItem 
            eventKey="cost"
            onClick={() => {
                setTransactionType("cost");  
                setTransactionModalDisplay(true);
        }}
        >
          <NavIcon>
            <i className="fa fa-minus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Add Cost</NavText>
        </NavItem>
      </Nav>
      <TransactionModal
        display={transactionmodalDisplay}
        handleClose={() => setTransactionModalDisplay(false)}
        transactionType={transactionType}
      />
    </SideNav>
  );
};

export default Navbar;

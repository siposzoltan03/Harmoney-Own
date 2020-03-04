import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React from "react";

export const Navbar = () => {
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
        <NavItem eventKey="income">
          <NavIcon>
            <i className="fa fa-plus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Add Income</NavText>
        </NavItem>
        <NavItem eventKey="cost">
          <NavIcon>
            <i className="fa fa-minus" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Add Cost</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};

export default Navbar;

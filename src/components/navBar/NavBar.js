import React from "react";
import Logo from "../../images/logoOld.png";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import { auth } from "../../firebase";
import { useInput } from "../MainStoreProvider";
import { Link as RouterLink, Route } from "react-router-dom";

function NavBar() {
  const { chartData, dispatch } = useInput();
  console.log(chartData.user.photoURL);
  return (
    <div className="navBar">
      <Navbar bg="dark" collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img height="40" className="d-inline-block align-top" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navBar__link">
              <RouterLink to="/home" className="router__link">
                Home
              </RouterLink>
            </Nav.Link>
            <Nav.Link className="navBar__link">
              <RouterLink to="/dashboard" className="router__link">
                Dashboard
              </RouterLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "30px",
              }}
            >
              <Avatar src={chartData.user?.photoURL} alt="User Image" />
              <div
                style={{
                  marginLeft: "10px",
                  fontWeight: "500",
                  color: "white",
                  textTransform: "capitalize",
                }}
              >
                Hello, {chartData.user?.email.split("@")[0]}
              </div>
            </div>

            <Nav.Link onClick={() => auth.signOut()} className="navBar__link">
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

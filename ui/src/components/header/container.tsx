import React from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import Icon from "react-fontawesome";

const HeaderContainer: React.FC = () => {
    return (
        <Navbar style={{ borderBottom: "1px solid #dfdfdf", height: "69px" }} expand="lg">
            <Navbar.Brand href="#home">
                <Icon name="cloud" />
                &nbsp;Private Drive
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <div>
                    <span>Account</span>
                    <Image
                        className="ml-3"
                        width={40}
                        height={40}
                        style={{ backgroundColor: "#efefef" }}
                        src="holder.js/171x180"
                        roundedCircle
                    />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderContainer;

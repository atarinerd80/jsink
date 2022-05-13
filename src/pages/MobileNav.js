import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

export class MobileNav extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect variant="dark" fixed="top" expand="lg" className="d-xs-flex d-sm-flex d-md-none mobile-nav">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="images/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="JS Ink Logo"
                        />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link eventKey="1" href="#body">Home</Nav.Link>
                                <Nav.Link eventKey="2" href="#about">About Us</Nav.Link>
                                <Nav.Link eventKey="4" href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link eventKey="5" href="#contact-us">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container> 
                </Navbar>
            </>
        );
    }
}
export default MobileNav;
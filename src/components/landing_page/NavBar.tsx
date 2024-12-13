import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const LandingNavbar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                {/* Logo */}
                <Navbar.Brand href="#home" className="fw-bold">
                    Medora
                </Navbar.Brand>

                {/* Hamburger Menu for Mobile */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Nav Links */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
                        <Nav.Link href="#about" className="text-white">About</Nav.Link>
                        <Nav.Link href="#testimonials" className="text-white">Testimonials</Nav.Link>
                        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                    </Nav>

                    {/* Call-to-Action Button */}
                    <Nav>
                        <Button href="#signup" variant="success" className="px-4">
                            Get Started
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default LandingNavbar;

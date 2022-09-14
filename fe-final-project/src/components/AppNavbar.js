import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function AppNavbar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}href>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/dinosaur-database'}>Dinosaur Database</Nav.Link>
                        <Nav.Link as={Link} to={'/dinosaur-battles'}>Dinosaur Battles</Nav.Link>
                        <Nav.Link as={Link} to={'/about-me'}>About Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavbar;
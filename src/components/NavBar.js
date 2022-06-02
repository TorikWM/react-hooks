import React from 'react'
import { Navbar , Nav , Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <div style={{ marginBottom:'20px' }} >
     <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#add">Add Movie</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

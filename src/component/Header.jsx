import React from 'react';
import { Navbar, Container, Form, NavDropdown, Button, Nav } from 'react-bootstrap';


function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img width={'150px'} src="https://www.flixster.com/logo/logo_Desktop.svg" alt="Homepage" class="css-8ke3m0-ImgLogoMobile eyu78re4" />{' '}

        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Box Office</Nav.Link>
            <Nav.Link href="#action2">Theaters</Nav.Link>
            <Nav.Link href="#action2">At Home</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Movie or theater"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Header
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const MyNav = () => (
  <Navbar expand="lg" className="container-fluid">
    <Container className="row">
      <Navbar.Brand href="#" className="col me-0">
        <img
          src="./logo.png"
          style={{ width: "100px", height: "55px" }}
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        className="col bg-white"
      />
      <Navbar.Collapse id="navbarSupportedContent" className="col">
        <Nav className="me-auto  mb-2 mb-lg-0">
          <Nav.Link href="#" className="fw-bold text-secondary px-0">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold text-secondary ">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold text-secondary">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold text-secondary">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold text-secondary">
            My List
          </Nav.Link>
        </Nav>
        <div className="d-flex align-items-center justify-content-end text-white ">
          <FaSearch className="icons " />
          <div id="kids" className="fw-bold ">
            KIDS
          </div>
          <FaBell className="icons" />
          <FaUserCircle className="icons " />
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;

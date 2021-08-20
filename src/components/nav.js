import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navigation() {
  return (
    <div className="Navigation">
      <>
  <Navbar>
    <Navbar.Brand href="#home">Son-gil</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#donate">기부하기</Nav.Link>
      <Nav.Link href="#project">프로젝트</Nav.Link>
      <Nav.Link href="#login">로그인</Nav.Link>
    </Nav>
  </Navbar>
</>
    </div>
  );
}

export default Navigation;
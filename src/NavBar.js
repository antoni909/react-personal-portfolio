import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = ()=> {

  return (
      <Container>
        <div className="main-nav">
          <Row className="justify-content-md-center">
          <Navbar 
          variant="dark" 
          bg="dark" 
          expand="md"
          fixed="top"
          sticky="top"
          >
          <Col>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </Col>
          <Col>
              <Link to="/resume" style={{ textDecoration: 'none' }}>Resume</Link>
          </Col>
          <Col>
              <Link to="/why-me" style={{ textDecoration: 'none' }}>Why Me?</Link>
          </Col>
          <Col>
              <Link to="/awards" style={{ textDecoration: 'none' }}>Awards</Link>
          </Col>
          <Col>
              <Link to="/lets-talk" style={{ textDecoration: 'none' }}>Lets Talk</Link>
          </Col>
          </Navbar>
          </Row>
        </div>
      </Container>
  );

}

export default NavBar;

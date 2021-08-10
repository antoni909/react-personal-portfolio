import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  return(
    <Container>
      <Row>
        <Col>
          <h1>
            I'm Lorenzo Ortega.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col >
          <h2>
            I'm a Portland Based Software Developer.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            My highest aspiration is to become a professional in the Tech Industry as a Software Developer. I continue to grow by being adaptive and malleable to new concepts and paradigms. My willingness to work in a team is paramount to my conceptual knowledge and growth. I want to be an effective and approachable developer that is always willing to teach those around me.
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;

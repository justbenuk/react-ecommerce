import React from "react";

//styles
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Developed By JustbenUK</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

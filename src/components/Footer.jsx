import { Col, Container, Figure, Row } from "react-bootstrap";

import React from "react";

function Footer() {
  return (
    <Container>
      <Row>
        <Col xs={6} className="mx-auto my-5">
          <Figure>
            <h4>
              Character consists of what you do on the third and fourth tries
            </h4>
            <br />
            <Figure.Caption className="blockquote-footer">
              <cite title="Source Title" className="focused">
                James A. Michener
              </cite>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

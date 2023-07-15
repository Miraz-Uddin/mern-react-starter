import { Col, Container, Navbar, Row } from "react-bootstrap";

function Header({ title }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="mx-auto">
          <Col>
            <Navbar.Brand>{title}</Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;

import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

function Content() {
  const [printText, setPrintText] = useState("");
  const [output, setOutput] = useState(null);
  const handlePrint = (e) => {
    e.preventDefault();
    setOutput(printText);
  };
  const handleTextChange = (e) => {
    setPrintText(e.target.value || "");
    setOutput(null);
  };
  return (
    <Container>
      <Row>
        <Col xs={6} className="mx-auto my-5">
          <Form>
            <FloatingLabel controlId="printText" label="Print Text">
              <Form.Control
                as="textarea"
                placeholder="Type Anything Here"
                style={{ height: "100px" }}
                onChange={handleTextChange}
                value={printText}
              />
            </FloatingLabel>
            <Button
              className="mt-3"
              variant="info"
              type="submit"
              onClick={handlePrint}
            >
              Print
            </Button>
          </Form>
        </Col>
      </Row>
      {output ? (
        <Row>
          <Col xs={6} className="mx-auto mb-5">
            <Card
              bg={"success"}
              text={"white"}
              style={{ width: "100%" }}
              className="mb-2"
            >
              <Card.Header>Printed Text</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 ">{printText}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : output !== "" ? (
        <></>
      ) : (
        <Row>
          <Col xs={6} className="mx-auto mb-5">
            <Card
              bg={"warning"}
              text={"dark"}
              style={{ width: "100%" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 ">
                  Nothing To Print !!
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Content;

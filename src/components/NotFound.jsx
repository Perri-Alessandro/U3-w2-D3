import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => (
  <Container>
    <Row className="mt-3 flex-column justify-content-center align-items-center">
      <Col xs={12} md={6}>
        <img
          className="w-100"
          src="https://placekitten.com/400"
          alt="error-page"
        />
        <h4 className="mt-2 text-center text-white">404 - Page Not Found</h4>
      </Col>
    </Row>
  </Container>
);

export default NotFound;

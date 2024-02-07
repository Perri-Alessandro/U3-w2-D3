import { Container, Row, Col } from "react-bootstrap";

const Home = () => (
  <Container>
    <Row className="mt-3 flex-column justify-content-center align-items-center">
      <Col xs={12} md={6}>
        <h4 className="mt-2 text-center text-white">
          Benvenuto! Scegli dalla Navbar quale pagina vistare
        </h4>
        <img className="w-100" src="https://placekitten.com/600" alt="home" />
      </Col>
    </Row>
  </Container>
);

export default Home;

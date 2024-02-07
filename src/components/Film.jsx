import React, { Component } from "react";
import { Spinner, Row, Col } from "react-bootstrap";

import { Card } from "react-bootstrap";

class Film extends Component {
  state = {
    movies: [],
    loading: true,
  };

  getFilm = (endpoint) => {
    this.setState({ loading: true });

    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b84970d1&s=" + endpoint)
      .then((response) => {
        if (response.ok) {
          console.log("IL SERVER è STATO CONTATTATO CORRETTAMENTE", response);
          return response.json();
        } else {
          throw new Error("ERRORE NEL RECUPERO DEI DATI");
        }
      })
      .then((oggettoData) => {
        console.log("OGGETTO RICEVUTO", oggettoData);
        const array = oggettoData.Search;
        console.log("ARRAY RICEVUTO", array);
        this.setState({ movies: array, loading: false });
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        this.setState({ loading: false });
        alert("ERRORE DI COMUNICAZIONE CON IL SERVER");
      });
  };
  componentDidMount() {
    this.getFilm(this.props.endpoint);
  }

  render() {
    const { movies, loading } = this.state;
    return (
      // ...
      <>
        {loading && <Spinner animation="border" variant="success" />}
        <Row className="text-white g-5 my-2 mx-3">
          <p className="text-start fs-3">{this.props.h1}</p>
          {movies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} sm={6} md={4} xl={2}>
              <Card className="rounded-5" style={{ height: "40vh" }}>
                <Card.Img
                  className="rounded-top-5"
                  style={{ height: "20vh" }}
                  variant="top"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <Card.Body>
                  <p>{movie.Type}</p>
                  <Card.Title>{movie.Title}</Card.Title>
                  <p>{movie.Year}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
      // ...
    );
  }
}

export default Film;

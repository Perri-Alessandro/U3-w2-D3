import React from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Film = ({ h1, endpoint }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilm(endpoint);
  }, [endpoint]);

  const getFilm = (endpoint) => {
    setLoading(true);

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
        setMovies(oggettoData.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        setLoading(false);
        alert("ERRORE DI COMUNICAZIONE CON IL SERVER");
      });
  };

  return (
    <>
      {loading && <Spinner animation="border" variant="success" />}
      <Row className="text-white g-5 my-2 mx-3">
        <p className="text-start fs-3">{h1}</p>
        {movies.slice(0, 6).map((movie) => (
          <Col key={movie.imdbID} sm={6} md={4} xl={2}>
            <Link
              to={`/movie-details/${movie.imdbID}`}
              style={{ textDecoration: "none" }}
            >
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
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Film;

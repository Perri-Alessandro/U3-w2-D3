import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=b84970d1`)
      .then((response) => {
        if (response.ok) {
          console.log("IL SERVER è STATO CONTATTATO CORRETTAMENTE", response);
          return response.json();
        } else {
          throw new Error("ERRORE NEL RECUPERO DEI DATI");
        }
      })
      .then((data) => {
        console.log("DATI RICEVUTI PER MOVIE", data);
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        setLoading(false);
        alert("ERRORE DI COMUNICAZIONE CON IL SERVER");
      });
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <img src="{movieDetails.Poster}" alt="" />
      {/* <p>{movieDetails.Plot}</p>
      <p>Director: {movieDetails.Director}</p>
      <p>Actors: {movieDetails.Actors}</p> */}
    </div>
  );
};

export default MovieDetails;

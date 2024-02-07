import Film from "./Film";
import React from "react";

const TVShows = () => (
  <>
    <Film h1="Trending Now" endpoint="StarWars" />
    <Film h1="Watch it Again" endpoint="The Lord Of The Rings" />
    <Film h1="New Releases" endpoint="Harry Potter" />
    <Film h1="Others" endpoint="Friends" />
    <Film endpoint="Instinct" />
  </>
);

export default TVShows;

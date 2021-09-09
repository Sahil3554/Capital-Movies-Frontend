import React from "react";
import MovieDetails from "./MovieDetails";

const Movies = ({ pageData }) => {
  return (
    <div className="container users">
      <div className="row">
        {pageData.map((arr, index) => (
          <MovieDetails
            movie_id={arr.id}
            key={index}
            title={arr.original_title}
            avatar={arr.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;

import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ title, avatar }) => {
  return (
    <div className="col-md-3 d-flex align-items-center justify-content-center">
      <div className="card mb-3 mt-2">
        <img
          src={`https://image.tmdb.org/t/p/w500/${avatar}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b>{title}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

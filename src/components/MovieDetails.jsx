import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = (props) => {
  const { title, avatar, movie_id } = props;
  // console.log(useLocation());
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="col-md-3 d-flex align-items-center justify-content-center">
      <div
        className="card mb-3 mt-2"
        // onClick={() => props.history.push(`/detail/${movie_id}`)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${avatar}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b>{title}</b>
          </p>
          <div className="row">
            <button
              className="m-auto col-5 btn btn-primary"
              onClick={() =>
                history.push(`${location.pathname}/detail/${movie_id}`)
              }
            >
              View
            </button>
            <button className="m-auto col-5 btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

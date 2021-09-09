import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Detail = () => {
  const { id } = useParams();
  const [result, setResult] = useState({ error: "error" });
  const getDetail = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      console.log(data);
      setResult(data);
    } catch (err) {
      // console.log(err);
      setResult({ error: err });
    }
  };
  useEffect(() => {
    getDetail();
  }, [id]);
  const { error, status_message } = result;
  return (
    <>
      {!error && !status_message && (
        <div className="detail-page">
          <h1>Details</h1>
        </div>
      )}
      {error || (status_message && <ErrorPage />)}
    </>
  );
};

export default Detail;

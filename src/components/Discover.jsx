import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movies from "./Movies";
import Pagination from "./Pagination";
import dotenv from "dotenv";
import { Switch, Route } from "react-router";
import Detail from "./Detail";
import { Link, useLocation } from "react-router-dom";
dotenv.config();
const Discover = (props) => {
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(3);
  const getMoviesDB = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    setPageData(data.results);
    setTotal(data.total_pages);
  };
  useEffect(() => {
    getMoviesDB();
  }, [page]);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    if (!localStorage.getItem("token")) {
      props.history.push("/login");
    } else {
      const res = await Axios.get("/api/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  const location = useLocation();
  return (
    <div className="discover">
      {/* <Switch>
        <Route path={`${path}/xyz`} component={ErrorPage}></Route>
      </Switch> */}
      {/* <Link to={`${url}/xyz`}>XYz</Link> */}
      <h1 className="text-primary">Movies Page</h1>
      <Switch>
        <Route path="/">
          <Movies pageData={pageData} />
        </Route>
        <Route path={`${location.pathname}/detail`} component={Detail}></Route>
      </Switch>
      <Pagination page={page} setPage={setPage} total={total} />
    </div>
  );
};

export default Discover;

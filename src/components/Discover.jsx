import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movies from "./Movies";
import Pagination from "./Pagination";
// import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
// import ErrorPage from "./ErrorPage";
const Discover = () => {
  // const { url, path } = useRouteMatch();
  // console.log(`URL : ${url}`);
  // console.log(`PATH : ${path}`);
  // console.log(useRouteMatch());
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(3);

  const getMoviesDB = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=7825a216f1278762209ce08708423500&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    console.log(data);
    console.log(data.results);
    setPageData(data.results);
    setTotal(data.total_pages);
    console.log(pageData);
    console.log(total);
  };
  useEffect(() => {
    getMoviesDB();
  }, [page]);

  return (
    <div>
      {/* <Switch>
        <Route path={`${path}/xyz`} component={ErrorPage}></Route>
      </Switch> */}
      {/* <Link to={`${url}/xyz`}>XYz</Link> */}
      <h1 className="text-primary">Movies Page</h1>
      <Movies pageData={pageData} />
      <Pagination page={page} setPage={setPage} total={total} />
    </div>
  );
};

export default Discover;

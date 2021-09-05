import React from "react";
import { Link, Route } from "react-router-dom";
const Discover = () => {
  return (
    <div>
      <h1>Discover</h1>
      <Route exact path="/xyz">
        XYZ
      </Route>
      <Link to="/discover/xyz">XYz</Link>
    </div>
  );
};

export default Discover;

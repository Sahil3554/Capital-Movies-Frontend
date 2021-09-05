import React from "react";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-disc">Page You Are Looking for Doesnot Exist</p>
    </div>
  );
};

export default ErrorPage;

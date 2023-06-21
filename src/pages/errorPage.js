import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1 className="text-3xl">
        Oops! Error occurred
      </h1>
      <p>The page does not exist</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;

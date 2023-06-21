import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route,
} from 'react-router-dom';
import Home from './pages/Homepage';
import ErrorPage from './pages/errorPage';
import './App.css';

const App = () => {
  const router = createBrowserRouter((
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/errorpage" element={<ErrorPage />} />
      </Route>,
    )
  ));

  return (
    <RouterProvider router={router} />
  );
};

export default App;

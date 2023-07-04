import React from 'react';
import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import './App.css';
import Home from './pages/Homepage';
import MailSent from './pages/MailSent';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/mailsent',
      element: <MailSent />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;

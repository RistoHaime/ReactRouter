
import App from './App.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx';
import About from './About.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


 const router = createBrowserRouter([
 
  
    {
      path: "/",
      element: <App />,
      children: [
        {
          element: <Home />,
          index: true
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ]
 }
 ]);
 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  );
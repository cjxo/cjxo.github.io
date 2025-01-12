import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/index.css";

import App from './App.jsx';
import Portfolio from './routes/Portfolio';
import Blog from './routes/Blog';
import Resume from './routes/Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/resume",
        element: <Resume />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

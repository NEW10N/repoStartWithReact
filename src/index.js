import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/main/home/Home';
import PersonajesListContainer from './components/main/personajes/PersonajesListContainer';
import PersonajeDataContainer from './components/main/personajes/personajeDataContainer/PersonajeDataContainer';

// const router = createBrowserRouter([{
//   path: "/",
//   element: <App />
//   // ,
//   // childre: [{
//   //   path: "/",
//   //   element: <Home />
//   // }]
//   // ,{
//   //   path: "/personajes",
//   //   element: <PersonajesListContainer />
//   // }


// }
// ]
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
      ,
      {
        path:"/personajes",
        element: <PersonajesListContainer/>
      }
      ,
      {
        path:"personajes/:id",
        element: <PersonajeDataContainer/>
      }
      // ,
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


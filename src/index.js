import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/main/home/Home';
import ProductosListContainer from './components/main/productos/ProductosListContainer';
import ProductosDataContainer from './components/main/productos/productosDataContainer/PersonajeDataContainer';
import Login from './components/login/Login';
import  {About} from './components/about/About';
import Background from './components/background/Background';
import Registro from './components/registro/Registro';
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
        path:"/productos",
        element: <ProductosListContainer/>
      }
      ,
      {
        path:"productos/:id",
        element: <ProductosDataContainer/>
      }      ,
      {
        path:"/About",
        element: <About/>
      },
      // ,
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },{
    path: "/login",
    element: <Background/>,
    children: [
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/login/new",
        element: <Registro/>
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


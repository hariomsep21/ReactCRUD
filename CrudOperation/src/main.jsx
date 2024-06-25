import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Regis from "./component/Registration/Regis.jsx";
import CreatRegis from "./component/Registration/CreatRegis.jsx";
import ViewRegis from "./component/Registration/ViewRegis.jsx";
import EditRegis from "./component/Registration/EditRegis.jsx";
import Nav from "./component/NavBar/Nav.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Regis /> },
      { path: "/creatreg", element: <CreatRegis /> },
      { path: "/viewreg", element: <ViewRegis /> },
      { path: "/editreg/:id", element: <EditRegis /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

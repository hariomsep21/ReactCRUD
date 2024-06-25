import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./component/NavBar/Nav.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;

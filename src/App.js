import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    // <div className="">
    //   <Navbar></Navbar>
    //   <Home></Home>
    // </div>
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

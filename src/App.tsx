import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import TopContainer from "./components/TopContainer/TopContainer";

let year = new Date().getFullYear();
let companyName = "BRCOSMETICS";

const Layout = () => {
  return (
    <>
      <TopContainer />
      <Navbar />
      <Outlet />
      <Footer //companyName={companyName} year={year}
      />
      ,
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      //element: <Footer companyName={companyName} year={year}/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

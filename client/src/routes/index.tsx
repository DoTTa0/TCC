import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import HomePage from "../pages/Home";
import HomeSidebar from "../components/HomeSidebar";


const Main = () => {
    return (
        <Router>
            <HomeSidebar/>
            <Routes>
                <Route path='/' Component={HomePage} ></Route>
            </Routes>
        </Router>
    );
}

export default Main;
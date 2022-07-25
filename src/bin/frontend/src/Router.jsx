import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

// pages
import HomePage from "./containers/home/HomePage";
import Error404Page from "./containers/error/Error404Page";

class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />}></Route>
      </Routes>
    );
  }
}

export default Router;

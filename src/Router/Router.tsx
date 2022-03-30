import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Containers/Profile";

const Router = () => {
    const RoutePaths = {
        Profile: "/Profile",
    }
  return <BrowserRouter>
      <Routes>
          <Route path={RoutePaths.Profile} element={<Profile />} />
      </Routes>
  </BrowserRouter>
};

export default Router;

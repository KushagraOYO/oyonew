import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "../Containers/Customer";
import Profile from "../Containers/Profile";

const Router = () => {
    const RoutePaths = {
        Profile: "/Profile",
        Customer: "/Customer"
    }
  return <BrowserRouter>
      <Routes>
          <Route path={RoutePaths.Profile} element={<Profile />} />
          <Route path={RoutePaths.Customer} element={<Customer />} />
      </Routes>
  </BrowserRouter>
};

export default Router;

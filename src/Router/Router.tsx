import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Customer from "../Containers/Customer";
import FloorConfig from "../Containers/FloorConfig";
import OyoPanel from "../Containers/OyoPanel";
import FloorUploadLimit from "../Containers/PriceLimits";
import Profile from "../Containers/Profile";

const Router = () => {
    const RoutePaths = {
        Profile: "/Profile",
        Customer: "/Customer",
        OyoPanel: "/OyoPanel",
        FloorUploadLimit: "/FloorUploadLimit",
        FloorConfig: "/FloorConfig"
    }
  return <BrowserRouter>
      <Routes>
          <Route path={RoutePaths.Profile} element={<Profile />} />
          <Route path={RoutePaths.Customer} element={<Customer />} />
          <Route path={RoutePaths.OyoPanel} element={<OyoPanel />} />
          <Route path={RoutePaths.FloorUploadLimit} element={<FloorUploadLimit />} />
          <Route path={RoutePaths.FloorConfig} element={<FloorConfig />} />
          <Route path="*" element={<Navigate to="/Profile" />} />
      </Routes>
  </BrowserRouter>
};

export default Router;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// importing authentication routes
// this compnents manage the rendering of routes to the corresponding osertypes
// based on the type of user logged in i.e admin, creator, worker
import AdminAuthRoutes from "./pages/auth/AdminAuthRoutes";
import CreatorAuthRoutes from "./pages/auth/CreatorAuthRoutes";
import WorkerAuthRoutes from "./pages/auth/workerAuthRoutes";

// IMPORTING PAGES

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import CreatorDashBoard from "./pages/Creator/CreatorDashBoard";
import WorkerDashBoard from "./pages/Worker/WorkerDashBoard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />

        <Route
          path="/admin"
          element={
            <AdminAuthRoutes>
              <AdminDashBoard />
            </AdminAuthRoutes>
          }
        />
        <Route
          path="/creator"
          element={
            <CreatorAuthRoutes>
              <CreatorDashBoard />
            </CreatorAuthRoutes>
          }
        />
        <Route
          path="/worker"
          element={
            <WorkerAuthRoutes>
              <WorkerDashBoard />
            </WorkerAuthRoutes>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;

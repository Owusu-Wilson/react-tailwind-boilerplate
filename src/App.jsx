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

        {/* Base route for Admin */}
        <Route
          path="/admin/*"
          element={
            <AdminAuthRoutes>
              <Routes>
                <Route index path="/" element={<AdminDashBoard />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              {/* Add more nested routes for Admin as needed */}
            </AdminAuthRoutes>
          }
        />
        {/* Base route for Creator */}
        <Route
          path="/creator/*"
          element={
            <CreatorAuthRoutes>
              <Routes>
                <Route index path="/" element={<CreatorDashBoard />} />
                {/* Add more nested routes for Creator as needed */}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </CreatorAuthRoutes>
          }
        />

        {/* Base route for Worker */}
        <Route
          path="/worker/*"
          element={
            <WorkerAuthRoutes>
              <Routes>
                <Route index path="/" element={<WorkerDashBoard />} />
                {/* Add more nested routes for Worker as needed */}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </WorkerAuthRoutes>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;

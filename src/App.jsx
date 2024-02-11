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

// generic pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

// creator related pages
import CreatorDashBoard from "./pages/Creator/CreatorDashBoard";

// worker related pages
import WorkerDashBoard from "./pages/Worker/WorkerDashBoard";

// admin related pages
import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import AdminCreatorManagement from "./pages/Admin/AdminCreatorManagement";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import AdminSettings from "./pages/Admin/AdminSettings";
import AdminWorkerManagement from "./pages/Admin/AdminWorkerManagement";
import Channels from "./pages/Creator/Channels";
import Analytics from "./pages/Creator/Analytics";
import Campaigns from "./pages/Creator/Campaigns";

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
                <Route index path="/analytics" element={<AdminAnalytics />} />
                <Route
                  index
                  path="/creators"
                  element={<AdminCreatorManagement />}
                />
                <Route
                  index
                  path="/workers"
                  element={<AdminWorkerManagement />}
                />
                <Route index path="/settings" element={<AdminSettings />} />
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
                <Route index path="/channels" element={<Channels />} />
                <Route index path="/analytics" element={<Analytics />} />
                <Route index path="/campaigns" element={<Campaigns />} />
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

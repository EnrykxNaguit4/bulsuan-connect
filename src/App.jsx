import ProtectedRoute from "./components/auth/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Files from "./pages/Files";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Concern from "./pages/Concern";
import TrackConcern from "./pages/TrackConcern";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminFiles from "./pages/admin/Files";
import AdminConcerns from "./pages/admin/Concerns";
import WebsiteSettings from "./pages/admin/WebsiteSettings";

function App() {
  return (
    <Routes>

      {/* PUBLIC PAGES */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/files"
        element={<Files />}
      />

      <Route
        path="/faq"
        element={<FAQ />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/concern"
        element={<Concern />}
      />

      <Route
        path="/track-concern"
        element={<TrackConcern />}
      />


      {/* ADMIN LOGIN */}

      <Route
        path="/admin/login"
        element={<Login />}
      />


      {/* ADMIN DASHBOARD */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      {/* ADMIN FILES */}

      <Route
        path="/admin/files"
        element={
          <ProtectedRoute>
            <AdminFiles />
          </ProtectedRoute>
        }
      />


      {/* ADMIN CONCERNS */}

      <Route
        path="/admin/concerns"
        element={
          <ProtectedRoute>
            <AdminConcerns />
          </ProtectedRoute>
        }
      />


      {/* WEBSITE SETTINGS */}

      <Route
        path="/admin/settings"
        element={<WebsiteSettings />}
      />

    </Routes>
  );
}

export default App;
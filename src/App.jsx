import ProtectedRoute from "./components/auth/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import Files from "./pages/Files";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Concern from "./pages/Concern";
import AnnouncementDetails from "./pages/AnnouncementDetails";  
import EventDetails from "./pages/EventDetails";
import TrackConcern from "./pages/TrackConcern";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminAnnouncements from "./pages/admin/Announcements";
import AdminEvents from "./pages/admin/Events";
import AdminFiles from "./pages/admin/Files";
import AdminConcerns from "./pages/admin/Concerns";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcements" element={<Announcements />} />
         <Route path="/announcements/:id" element={<AnnouncementDetails />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/files" element={<Files />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/concern" element={<Concern />} />
      <Route path="/track-concern" element={<TrackConcern />} />
   


      <Route path="/admin/login" element={<Login />} />
      
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/announcements"
  element={
    <ProtectedRoute>
      <AdminAnnouncements />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/events"
  element={
    <ProtectedRoute>
      <AdminEvents />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/files"
  element={
    <ProtectedRoute>
      <AdminFiles />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/concerns"
  element={
    <ProtectedRoute>
      <AdminConcerns />
    </ProtectedRoute>
  }
/>

    </Routes>

    
  );
}

export default App;
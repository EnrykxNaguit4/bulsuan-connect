import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import Files from "./pages/Files";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Concern from "./pages/Concern";

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
      <Route path="/events" element={<Events />} />
      <Route path="/files" element={<Files />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/concern" element={<Concern />} />

      <Route path="/admin/login" element={<Login />} />
<Route path="/admin/dashboard" element={<Dashboard />} />
<Route path="/admin/announcements" element={<AdminAnnouncements />} />
<Route path="/admin/events" element={<AdminEvents />} />
<Route path="/admin/files" element={<AdminFiles />} />
<Route path="/admin/concerns" element={<AdminConcerns />} />

    </Routes>

    
  );
}

export default App;
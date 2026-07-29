import AdminLayout from "../../components/admin/Layout/AdminLayout";

import { useEffect, useState } from "react";

import AnnouncementTable from "../../features/announcements/AnnouncementTable";

import { getAnnouncements } from "../../services/announcementService";

function Announcements() {
  
  const [announcements, setAnnouncements] = useState([]);

useEffect(() => {
  async function loadAnnouncements() {
    const data = await getAnnouncements();
    setAnnouncements(data);
  }

  loadAnnouncements();
}, []);

    return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Announcements
          </h1>

          <p className="text-gray-500 mt-2">
            Manage announcements shown on the student website.
          </p>
        </div>

        <button
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold"
        >
          + New Announcement
        </button>
      </div>
      
      <AnnouncementTable announcements={announcements} />

    </AdminLayout>
  );
}

export default Announcements;
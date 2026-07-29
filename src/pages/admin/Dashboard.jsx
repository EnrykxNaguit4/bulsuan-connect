import AdminLayout from "../../components/admin/Layout/AdminLayout";
import StatCard from "../../components/admin/StatCard";

import { useEffect, useState } from "react";
import { getAnnouncementCount } from "../../services/announcementService";

function Dashboard() {
  
    const [announcementCount, setAnnouncementCount] = useState(0);

useEffect(() => {
  async function loadCount() {
    const count = await getAnnouncementCount();
    setAnnouncementCount(count);
  }

  loadCount();
}, []);
  
    return (
    <AdminLayout>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back, Administrator.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

        <StatCard
          title="Announcements"
          value={announcementCount}
        />

        <StatCard
          title="Events"
          value="0"
        />

        <StatCard
          title="Files"
          value="0"
        />

        <StatCard
          title="Pending Concerns"
          value="0"
        />

      </div>

    </AdminLayout>
  );
}

export default Dashboard;
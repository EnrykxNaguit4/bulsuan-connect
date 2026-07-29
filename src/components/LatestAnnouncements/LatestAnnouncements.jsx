import { useEffect, useState } from "react";
import SectionHeader from "../UI/SectionHeader";
import { getAnnouncements } from "../../services/announcementService";

function LatestAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        const data = await getAnnouncements();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error loading announcements:", error);
      }
    }

    loadAnnouncements();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <SectionHeader
        title="Latest Announcements"
        subtitle="Stay updated with the latest announcements from the Local Student Council."
        actionText="View All"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="p-5">
              <p className="text-sm text-gray-500">
                {announcement.date}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {announcement.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {announcement.description}
              </p>

              <button className="mt-5 text-green-700 font-semibold">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestAnnouncements;
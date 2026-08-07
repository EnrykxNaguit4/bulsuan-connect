import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HomeSectionHeader from "../UI/HomeSectionHeader";
import { getAnnouncements } from "../../features/announcements/announcementService";

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
      <HomeSectionHeader
  title="Latest Announcements"
  subtitle="Stay updated with the latest announcements from the Local Student Council."
  buttonText="View All"
  buttonLink="/announcements"
/>

      <div className="grid md:grid-cols-3 gap-8">
        {announcements.slice(0, 3).map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {announcement.image ? (
              <img
                src={announcement.image}
                alt={announcement.title}
                className="w-full h-52 object-cover"
              />
            ) : (
              <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
                📢 No Image
              </div>
            )}

            <div className="p-5">
              <p className="text-sm text-gray-500">
                {announcement.date}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {announcement.title}
              </h3>

              <p className="mt-3 text-gray-600 line-clamp-3">
                {announcement.description}
              </p>

              <Link
                to={`/announcements/${announcement.id}`}
                className="inline-block mt-5 text-green-700 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/announcements"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          View All Announcements
        </Link>
      </div>
    </section>
  );
}

export default LatestAnnouncements;
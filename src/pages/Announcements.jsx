import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";

import { getAnnouncements } from "../features/announcements/announcementService";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadAnnouncements() {
      const data = await getAnnouncements();
      setAnnouncements(data);
    }

    loadAnnouncements();
  }, []);

  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.title.toLowerCase().includes(search.toLowerCase()) ||
    announcement.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PublicLayout>

      <section className="min-h-screen bg-slate-50 py-16">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-5xl font-bold">
            Announcements
          </h1>

          <p className="text-gray-600 mt-3">
            Stay updated with the latest announcements from the Local Student Council.
          </p>

          <input
            type="text"
            placeholder="🔍 Search announcements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mt-8 mb-10 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <div className="grid md:grid-cols-3 gap-8">

            {filteredAnnouncements.map((announcement) => (

              <Link
                key={announcement.id}
                to={`/announcements/${announcement.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition block"
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

                  <h2 className="text-2xl font-bold mt-2">
                    {announcement.title}
                  </h2>

                  <p className="text-gray-600 mt-3 line-clamp-3">
                    {announcement.description}
                  </p>

                  <p className="mt-5 text-green-700 font-semibold">
                    Read More →
                  </p>

                </div>

              </Link>

            ))}

          </div>

          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-16 text-gray-500 text-lg">
              No announcements found.
            </div>
          )}

        </div>

      </section>

    </PublicLayout>
  );
}

export default Announcements;
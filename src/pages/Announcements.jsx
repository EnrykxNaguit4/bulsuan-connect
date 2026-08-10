import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaImage, FaArrowRight } from "react-icons/fa";

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

      <section className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 min-h-[240px] flex flex-col justify-center">
          <h1 className="text-3xl font-bold">
            Announcements
          </h1>

          <p className="mt-5 max-w-2xl text-red-200 text-lg leading-8">
            Stay updated with the latest announcements from the Local Student Council.
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-slate-50 py-10">

        <div className="max-w-7xl mx-auto px-4">

          <div className="relative mb-8">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search announcements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white p-4 pl-12 shadow-sm focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {filteredAnnouncements.map((announcement) => (

              <Link
                key={announcement.id}
                to={`/announcements/${announcement.id}`}
                className="border border-gray-200/70 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition block"
              >

                {announcement.image ? (
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  <div className="w-full h-52 bg-gray-200 flex flex-col items-center justify-center text-gray-500">
                    <FaImage className="text-4xl" />
                    <span className="mt-3 text-sm">No Image</span>
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

                  <p className="mt-5 inline-flex items-center gap-2 text-red-700 font-semibold">
                    Read More <FaArrowRight className="inline-block" aria-hidden="true" />
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
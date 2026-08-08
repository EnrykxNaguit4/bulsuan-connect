import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";

import { getAnnouncements } from "../features/announcements/announcementService";

function AnnouncementDetails() {
  const { id } = useParams();

  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    async function loadAnnouncement() {
      const announcements = await getAnnouncements();

      const selected = announcements.find(
        (item) => item.id === id
      );

      setAnnouncement(selected);
    }

    loadAnnouncement();
  }, [id]);

  if (!announcement) {
    return (
      <PublicLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-500">
            Loading...
          </p>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>

      <section className="min-h-screen bg-slate-50 py-16">

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

          {announcement.image && (
            <img
              src={announcement.image}
              alt={announcement.title}
              className="w-full max-h-[500px] object-cover"
            />
          )}

          <div className="p-10">

            <p className="text-purple-700 font-semibold">
              {announcement.date}
            </p>

            <h1 className="text-5xl font-bold mt-3">
              {announcement.title}
            </h1>

            <p className="mt-8 text-gray-700 leading-8 whitespace-pre-line">
              {announcement.description}
            </p>

            <Link
              to="/announcements"
              className="inline-block mt-10 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl"
            >
              ← Back to Announcements
            </Link>

          </div>

        </div>

      </section>

    </PublicLayout>
  );
}

export default AnnouncementDetails;

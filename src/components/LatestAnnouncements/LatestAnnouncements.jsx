import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaImage } from "react-icons/fa";

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
    <section className="relative bg-slate-50 py-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-5 top-5 bottom-5 rounded-[2.5rem] bg-slate-900/10 blur-2xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-[2rem] bg-white p-5 sm:p-8 md:p-10 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.20)] ring-1 ring-gray-200/50">
          <HomeSectionHeader
            title="Latest Announcements"
            subtitle="Stay updated with the latest announcements from the Local Student Council."
            buttonText="View All"
            buttonLink="/announcements"
          />

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
            {announcements.slice(0, 3).map((announcement) => (
              <div
                key={announcement.id}
                className="group bg-white rounded-3xl border border-gray-200/80 overflow-hidden ring-1 ring-gray-200/70 shadow-[0_22px_70px_-24px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_85px_-24px_rgba(15,23,42,0.28)]"
              >
                  {announcement.image ? (
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="w-full h-40 sm:h-48 md:h-52 object-cover"
                    />
                  ) : (
                    <div className="w-full h-52 bg-gray-200 flex flex-col items-center justify-center text-gray-500">
                      <FaImage className="text-4xl" />
                      <span className="mt-3 text-sm">No Image</span>
                    </div>
                  )}

                  <div className="p-4 sm:p-5">
                    <p className="text-sm text-gray-500">
                      {announcement.date}
                    </p>

                    <h3 className="mt-2 text-lg sm:text-xl font-bold">
                      {announcement.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-gray-600 line-clamp-2 sm:line-clamp-3">
                      {announcement.description}
                    </p>

                    <Link
                      to={`/announcements/${announcement.id}`}
                      className="inline-flex items-center gap-2 mt-5 text-red-700 font-semibold hover:underline"
                    >
                      Read More <FaArrowRight className="inline-block" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestAnnouncements;
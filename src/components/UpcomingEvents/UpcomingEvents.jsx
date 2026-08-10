import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaImage } from "react-icons/fa";

import HomeSectionHeader from "../UI/HomeSectionHeader";
import { getEvents } from "../../features/events/eventService";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error loading events:", error);
      }
    }

    loadEvents();
  }, []);

  return (
    <section className="relative bg-slate-50 py-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-5 top-5 bottom-5 rounded-[2.5rem] bg-slate-900/10 blur-2xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.20)] ring-1 ring-gray-200/50">

          <HomeSectionHeader
            title="Upcoming Events"
            subtitle="Stay updated with activities and events organized by the Local Student Council."
            buttonText="View All"
            buttonLink="/events"
          />

          {events.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h3 className="text-2xl font-semibold">
                No upcoming events yet.
              </h3>

              <p className="text-gray-500 mt-2">
                Check back soon for future events.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                {events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="group overflow-hidden rounded-3xl border border-gray-200/80 bg-white ring-1 ring-gray-200/70 shadow-[0_22px_70px_-24px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_85px_-24px_rgba(15,23,42,0.28)]"
                  >
                      {event.image ? (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-52 object-cover"
                        />
                      ) : (
                        <div className="w-full h-52 bg-gray-200 flex flex-col items-center justify-center text-gray-500">
                          <FaImage className="text-4xl" />
                          <span className="mt-3 text-sm">No Image</span>
                        </div>
                      )}

                      <div className="p-5">
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <FaCalendarAlt className="inline-block" />
                          {event.date}
                        </p>

                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          <FaClock className="inline-block" />
                          {event.startTime} - {event.endTime}
                        </p>

                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          <FaMapMarkerAlt className="inline-block" />
                          {event.venue}
                        </p>

                        <h3 className="mt-3 text-xl font-bold">
                          {event.title}
                        </h3>

                        <p className="mt-3 text-gray-600 line-clamp-3">
                          {event.description}
                        </p>

                        <Link
                          to={`/events/${event.id}`}
                          className="inline-flex items-center gap-2 mt-5 text-red-700 font-semibold hover:underline"
                        >
                          Read More <FaArrowRight className="inline-block" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
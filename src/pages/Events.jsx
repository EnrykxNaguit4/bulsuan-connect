import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";
import { getEvents } from "../features/events/eventService";

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.description.toLowerCase().includes(search.toLowerCase()) ||
    event.venue.toLowerCase().includes(search.toLowerCase())
  );

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
    <PublicLayout>
      <section className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 min-h-[240px] flex flex-col justify-center">
          <h1 className="text-3xl font-bold">
            Events
          </h1>

          <p className="mt-5 max-w-2xl text-red-200 text-lg leading-8">
            Stay updated with the latest activities and events organized by the Local Student Council.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-10 px-4">

        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-400 bg-white p-4 focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        </div>

        {filteredEvents.length === 0 ? (
          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No events available.
            </h2>

            <p className="text-gray-500 mt-3">
              Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {events.map((event) => (
              <div
                key={event.id}
                className="border border-gray-200/70 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                    🎉 No Image
                  </div>
                )}

                <div className="p-5">

                  <p className="text-sm text-gray-500">
                    📅 {event.date}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    🕒 {event.startTime} - {event.endTime}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    📍 {event.venue}
                  </p>

                  <h2 className="mt-3 text-xl font-bold">
                    {event.title}
                  </h2>

                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {event.description}
                  </p>

                  <Link
                    to={`/events/${event.id}`}
                    className="inline-block mt-5 text-red-700 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}

      </section>
    </PublicLayout>
  );
}

export default Events;
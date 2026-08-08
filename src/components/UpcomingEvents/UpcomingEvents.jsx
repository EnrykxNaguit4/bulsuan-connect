import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="max-w-7xl mx-auto py-16 px-4">

      <HomeSectionHeader
        title="Upcoming Events"
        subtitle="Stay updated with activities and events organized by the Local Student Council."
        buttonText="View All"
        buttonLink="/events"
      />

      {events.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

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
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  <div className="w-full h-52 bg-gray-200 flex items-center justify-center">
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

                  <h3 className="mt-3 text-xl font-bold">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {event.description}
                  </p>

                  <Link
                    to={`/events/${event.id}`}
                    className="inline-block mt-5 text-purple-700 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>

                </div>
              </div>
            ))}

          </div>

          <div className="flex justify-center mt-12">

            <Link
              to="/events"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              View All Events
            </Link>

          </div>
        </>
      )}

    </section>
  );
}

export default UpcomingEvents;
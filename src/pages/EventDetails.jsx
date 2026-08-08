import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";
import { getEvents } from "../features/events/eventService";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function loadEvent() {
      const data = await getEvents();

      const selected = data.find(
        (item) => item.id === id
      );

      setEvent(selected);
    }

    loadEvent();
  }, [id]);

  if (!event) {
    return (
      <PublicLayout>
        <section className="max-w-5xl mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold">
            Event not found.
          </h2>
        </section>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <section className="max-w-5xl mx-auto py-16 px-4">

        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[450px] object-cover rounded-2xl shadow-md"
          />
        )}

        <div className="mt-10">

          <p className="text-purple-700 font-semibold">
            📅 {event.date}
          </p>

          <p className="text-gray-600 mt-2">
            🕒 {event.startTime} - {event.endTime}
          </p>

          <p className="text-gray-600 mt-2">
            📍 {event.venue}
          </p>

          <h1 className="text-5xl font-bold mt-6">
            {event.title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-700 whitespace-pre-line">
            {event.description}
          </p>

          <Link
            to="/events"
            className="inline-block mt-10 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl transition"
          >
            ← Back to Events
          </Link>

        </div>

      </section>
    </PublicLayout>
  );
}

export default EventDetails;
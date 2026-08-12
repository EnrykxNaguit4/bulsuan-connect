import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

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

<section className="bg-slate-50 pt-6 pb-13 md:pb-16">

    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="
            w-full
            max-h-[500px]
            object-cover

            md:max-h-[500px]
            max-h-[240px]
          "
        />
      )}

      <div className="p-6 md:p-10">

        <p className="flex items-center gap-3 text-red-700 font-semibold">
          <FaCalendarAlt />
          {event.date}
        </p>

        <p className="flex items-center gap-3 text-gray-600 mt-2">
          <FaClock />
          {event.startTime} - {event.endTime}
        </p>

        <p className="flex items-center gap-3 text-gray-600 mt-2">
          <FaMapMarkerAlt />
          {event.venue}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-6">
          {event.title}
        </h1>

        <p className="mt-8 text-base md:text-lg leading-8 text-gray-700 whitespace-pre-line">
          {event.description}
        </p>

        <Link
          to="/events"
          className="inline-flex items-center gap-2 mt-10 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl transition"
        >
          <FaArrowLeft />
          Back to Events
        </Link>

      </div>

    </div>

  </section>

</PublicLayout>
  );
}

export default EventDetails;
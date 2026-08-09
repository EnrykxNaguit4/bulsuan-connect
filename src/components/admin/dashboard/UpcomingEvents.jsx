import UpcomingEventCard from "./UpcomingEventCard";

function UpcomingEvents({

  events,

  onEdit,

}) {

  return events.length === 0 ? (

    <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500">

      No upcoming events.

    </div>

  ) : (

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

      {events.map((event) => (

        <UpcomingEventCard

          key={event.id}

          event={event}

          onEdit={onEdit}

        />

      ))}

    </div>

  );

}

export default UpcomingEvents;
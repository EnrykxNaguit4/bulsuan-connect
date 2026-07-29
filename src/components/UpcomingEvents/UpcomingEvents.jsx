import SectionHeader from "../UI/SectionHeader";

const events = [
  {
    id: 1,
    month: "AUG",
    day: "15",
    title: "Leadership Summit",
    location: "Student Center",
  },
  {
    id: 2,
    month: "AUG",
    day: "20",
    title: "Blood Donation Drive",
    location: "AVR Hall",
  },
  {
    id: 3,
    month: "SEP",
    day: "05",
    title: "Freshmen Orientation",
    location: "Gymnasium",
  },
];

function UpcomingEvents() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
     <SectionHeader
  title="Upcoming Events"
  subtitle="Never miss activities, seminars, and campus events."
  actionText="View All"
/>

      <div className="grid lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="w-20 h-20 rounded-xl bg-green-700 text-white flex flex-col items-center justify-center">
              <span className="text-sm">{event.month}</span>
              <span className="text-3xl font-bold">{event.day}</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {event.title}
            </h3>

            <p className="text-gray-600 mt-2">
              📍 {event.location}
            </p>

            <button className="mt-6 text-green-700 font-semibold">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
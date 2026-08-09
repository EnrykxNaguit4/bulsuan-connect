import {
  ChevronRightIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function UpcomingEventCard({

  event,

  onEdit,

}) {

  const formattedDate = event.date
  ? new Date(event.date).toLocaleDateString("en-PH", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  : "Date not set";

  return (

    <div

      onClick={() => onEdit(event)}

      className="
        group
        bg-white
        rounded-2xl
        shadow-md
        p-5
        cursor-pointer

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-2xl
        hover:ring-1
        hover:ring-red-200
      "

    >

      <div className="flex items-center gap-2 text-red-700">

        <CalendarDaysIcon className="w-5 h-5" />

        <span className="text-sm font-semibold">

          {formattedDate}

        </span>

      </div>

      <h3 className="mt-5 text-lg font-bold group-hover:text-red-700 transition">

        {event.title}

      </h3>

      <div className="flex items-center gap-2 mt-3 text-gray-500">

        <MapPinIcon className="w-4 h-4" />

        <span className="text-sm">

          {event.venue || "Location not specified"}

        </span>

      </div>

      <div className="flex justify-end mt-6">

        <div
          className="
            flex
            items-center
            gap-1

            text-sm
            font-medium
            text-red-700

            opacity-0
            transition

            group-hover:opacity-100
          "
        >

          View Details

          <ChevronRightIcon className="w-4 h-4" />

        </div>

      </div>

    </div>

  );

}

export default UpcomingEventCard;
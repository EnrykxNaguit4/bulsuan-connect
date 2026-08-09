import { ChevronRightIcon } from "@heroicons/react/24/outline";

function RecentConcernCard({
  concern,
  onView,
}) {
  function getStatusStyle(status) {
    switch (status) {
      case "Pending":
        return {
          dot: "bg-yellow-500",
          badge: "bg-yellow-50 text-yellow-700",
        };

      case "In Progress":
        return {
          dot: "bg-blue-500",
          badge: "bg-blue-50 text-blue-700",
        };

      case "Resolved":
        return {
          dot: "bg-green-500",
          badge: "bg-green-50 text-green-700",
        };

      default:
        return {
          dot: "bg-gray-400",
          badge: "bg-gray-100 text-gray-700",
        };
    }
  }

  const statusStyle = getStatusStyle(concern.status);

  const submittedDate = concern.createdAt?.toDate
    ? concern.createdAt
        .toDate()
        .toLocaleDateString("en-PH", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
    : "Unknown Date";

  return (
    <div
      onClick={() => onView(concern)}
      className="
group

bg-white

rounded-2xl

shadow-md

border
border-gray-400

p-5

cursor-pointer

transition-all
duration-300

hover:-translate-y-1.5
hover:shadow-2xl
hover:border-red-100
"
    >
      {/* Top */}

      <div className="flex items-center justify-between">

        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${statusStyle.badge}`}
        >
          <span
            className={`w-3 h-3 rounded-full ${statusStyle.dot}`}
          />

          {concern.status}
        </div>

        <span className="text-sm text-gray-400">
          {submittedDate}
        </span>

      </div>

      {/* Subject */}

      <h3 className="mt-5 text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">

        {concern.subject}

      </h3>

      {/* Reference */}

      <p className="mt-1 text-sm text-gray-500">

        {concern.referenceNumber}

      </p>

      {/* Bottom */}

      <div className="mt-5 flex justify-end">

        <div
          className="
            flex
            items-center
            gap-1

            text-sm
            font-medium
            text-red-700

            opacity-0
            translate-x-2

            transition-all
            duration-300

            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >

          View Details

          <ChevronRightIcon className="w-4 h-4" />

        </div>

      </div>
    </div>
  );
}

export default RecentConcernCard;
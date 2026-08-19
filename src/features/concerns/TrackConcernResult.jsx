import { CheckCircleIcon } from "@heroicons/react/24/outline";

function TrackConcernResult({
  concern,
  onTrackAnother,
}) {
  function formatDate(date) {
    if (!date) return "Not Available";

    const d =
      typeof date?.toDate === "function"
        ? date.toDate()
        : new Date(date);

    return d.toLocaleString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function getStatusStyle(status) {
    switch (status) {
      case "Pending":
        return "bg-[#FAEAEA] text-[#9A1C27]";

      case "In Progress":
        return "bg-[#FAEAEA] text-[#9A1C27]";

      case "Resolved":
        return "bg-[#5E1017] text-white";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-[#9A1C27]/20 p-10">

      {/* Header */}

      <div className="text-center">

        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FAEAEA] text-[#9A1C27]">
          <CheckCircleIcon
            className="w-10 h-10"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-4xl font-bold mt-4 text-[#5E1017]">
          Concern Found
        </h1>

        <p className="text-gray-500 mt-3 leading-7">
          Your concern was successfully located.
          Below is the latest information available.
        </p>

      </div>

      {/* Basic Information */}

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div>

          <p className="text-sm text-gray-500">
            Reference Number
          </p>

          <p className="font-bold text-xl mt-2 text-[#9A1C27]">
            {concern.referenceNumber}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Status
          </p>

          <span
            className={`inline-block mt-2 px-4 py-2 rounded-full font-semibold ${getStatusStyle(
              concern.status
            )}`}
          >
            {concern.status}
          </span>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Nature of Concern
          </p>

          <p className="font-semibold mt-2">
            {concern.natureOfConcern || "Not Available"}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Subject
          </p>

          <p className="font-semibold mt-2">
            {concern.subject || "Not Available"}
          </p>

        </div>

      </div>

      {/* Latest Update */}

      <div className="mt-10">

        <h2 className="font-semibold text-lg text-[#5E1017]">
          Latest Update
        </h2>

        <div className="bg-[#FAEAEA] border border-[#9A1C27]/10 rounded-2xl p-6 mt-4 whitespace-pre-wrap leading-7">

          {concern.statusRemarks
            ? concern.statusRemarks
            : "No updates have been posted yet. Please check again later."}

        </div>

      </div>

      {/* Dates */}

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div>

          <p className="text-sm text-gray-500">
            Submitted On
          </p>

          <p className="font-medium mt-2">
            {formatDate(concern.createdAt)}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Last Updated
          </p>

          <p className="font-medium mt-2">
            {formatDate(concern.lastUpdatedAt)}
          </p>

        </div>

      </div>

      {/* Button */}

      <button
        onClick={onTrackAnother}
        className="
          w-full
          mt-12
          border-2
          border-[#5E1017]
          text-white
          bg-[#9A1C27]
          hover:bg-[#5E1017] 
         
          rounded-xl
          py-4
          font-semibold
          transition
        "
      >
        Track Another Concern
      </button>

    </div>
  );
}

export default TrackConcernResult;
function TrackConcernResult({
  concern,
  onTrackAnother,
}) {
  function formatDate(date) {
    if (!date) return "Not Available";

    const d =
      typeof date.toDate === "function"
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
        return "bg-yellow-100 text-yellow-800";

      case "In Progress":
        return "bg-blue-100 text-blue-800";

      case "Resolved":
        return "bg-green-100 text-green-800";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border p-10">

      {/* Header */}

      <div className="text-center">

        <div className="text-5xl">
          ✅
        </div>

        <h1 className="text-4xl font-bold mt-4">
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

          <p className="font-bold text-xl mt-2">
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
            Category
          </p>

          <p className="font-semibold mt-2">
            {concern.category}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Subject
          </p>

          <p className="font-semibold mt-2">
            {concern.subject}
          </p>

        </div>

      </div>

      {/* Latest Update */}

      <div className="mt-10">

        <h2 className="font-semibold text-lg">
          Latest Update
        </h2>

        <div className="bg-gray-50 rounded-2xl p-6 mt-4 whitespace-pre-wrap leading-7">

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
        className="w-full mt-12 border-2 border--700 text-green-700 hover:bg-green-50 rounded-xl py-4 font-semibold transition"
      >
        Track Another Concern
      </button>

    </div>
  );
}

export default TrackConcernResult;
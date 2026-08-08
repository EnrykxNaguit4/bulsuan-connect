function getStatusBadge(status) {
  switch (status) {
    case "Pending":
      return (
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
          🟡 Pending
        </span>
      );

    case "In Progress":
      return (
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          🔵 In Progress
        </span>
      );

    case "Resolved":
      return (
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          🟢 Resolved
        </span>
      );

    default:
      return (
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          {status}
        </span>
      );
  }
}

function ConcernTable({
  concerns,
  onView,
}) {

  return (

    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="text-left p-4">
              Reference No.
            </th>

            <th className="text-left p-4">
              Student
            </th>

            <th className="text-left p-4">
              Category
            </th>

            <th className="text-left p-4">
              Status
            </th>

            <th className="text-left p-4">
              Submitted
            </th>

            <th className="text-left p-4">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {concerns.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center p-10 text-gray-500"
              >
                No submitted concerns.
              </td>

            </tr>

          ) : (

            concerns.map((concern) => (

              <tr
                key={concern.id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="p-4 font-medium">
                  {concern.referenceNumber}
                </td>

                <td className="p-4">
                  {concern.fullName}
                </td>

                <td className="p-4">
                  {concern.category}
                </td>

                <td className="p-4">
                  {getStatusBadge(concern.status)}
                </td>

                <td className="p-4">
                  {concern.createdAt?.toDate
                    ? concern.createdAt
                        .toDate()
                        .toLocaleDateString()
                    : "-"}
                </td>

                <td className="p-4">

                  <button
                    onClick={() => onView(concern)}
                    className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg transition"
                  >
                    View
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default ConcernTable;
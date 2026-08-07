function EventTable({
  events,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Title</th>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Venue</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>

          {events.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center p-8 text-gray-500"
              >
                No events yet.
              </td>
            </tr>
          ) : (
            events.map((event) => (
              <tr
                key={event.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">
                  {event.title}
                </td>

                <td className="p-4">
                  {event.date}
                </td>

                <td className="p-4">
                  {event.venue}
                </td>

                <td className="p-4">
                  <div className="flex gap-3">

                    <button
                      onClick={() => onEdit(event)}
                      className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(event)}
                      className="px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default EventTable;
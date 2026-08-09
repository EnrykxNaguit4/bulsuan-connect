import AdminTable from "../../components/admin/AdminTable";
import TableActions from "../../components/admin/TableActions";

function formatDate(date) {
  if (!date) return "-";

  // Firestore Timestamp
  if (typeof date?.toDate === "function") {
    return date.toDate().toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  // String (YYYY-MM-DD)
  return new Date(date).toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function EventTable({
  events,
  onEdit,
  onDelete,
}) {
  return (
    <AdminTable
      columns={[
  {
    label: "Title",
    width: "auto",
    className: "text-left",
  },
  {
    label: "Date",
    width: "170px",
    className: "text-center",
  },
  {
    label: "Venue",
    width: "190px",
    className: "text-left",
  },
  {
    label: "Actions",
    width: "120px",
    className: "text-center",
  },
]}
    >
      {events.length === 0 ? (
        <tr>
          <td
            colSpan={4}
            className="py-14 text-center text-gray-500"
          >
            No events found.
          </td>
        </tr>
      ) : (
        events.map((event) => (
          <tr
            key={event.id}
            className="
              border-b
              border-gray-200/70
              last:border-b-0
              hover:bg-red-50/40
              transition-colors
            "
          >
            {/* Title */}
            <td className="px-6 py-5">
              <div
                className="
                  overflow-hidden
                  whitespace-nowrap
                  text-ellipsis
                  font-semibold
                  text-gray-800
                "
                title={event.title}
              >
                {event.title}
              </div>
            </td>

            {/* Date */}
            <td className="px-6 py-5 text-center">
              <span className="inline-block whitespace-nowrap text-sm text-gray-600">
                {formatDate(event.date)}
              </span>
            </td>

            {/* Venue */}
            <td className="px-6 py-5">
              <div
                className="
                  overflow-hidden
                  whitespace-nowrap
                  text-ellipsis
                  text-gray-700
                "
                title={event.venue}
              >
                {event.venue || "-"}
              </div>
            </td>

            {/* Actions */}
            <td className="px-6 py-5">
              <TableActions
                onEdit={() => onEdit(event)}
                onDelete={() => onDelete(event)}
              />
            </td>
          </tr>
        ))
      )}
    </AdminTable>
  );
}

export default EventTable;
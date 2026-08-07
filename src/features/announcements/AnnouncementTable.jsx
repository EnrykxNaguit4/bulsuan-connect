function AnnouncementTable({
  announcements,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Title</th>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {announcements.map((announcement) => (
            <tr
              key={announcement.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-4 font-medium">
                {announcement.title}
              </td>

              <td className="p-4">
                {announcement.date}
              </td>

              <td className="p-4">
                <div className="flex gap-3">

                  <button
                    onClick={() => onEdit(announcement)}
                    className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(announcement)}
                    className="px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnnouncementTable;
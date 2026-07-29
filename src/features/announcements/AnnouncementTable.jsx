function AnnouncementTable({ announcements }) {
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
              className="border-t"
            >
              <td className="p-4">
                {announcement.title}
              </td>

              <td className="p-4">
                {announcement.date}
              </td>

              <td className="p-4 space-x-3">
                <button className="text-blue-600">
                  Edit
                </button>

                <button className="text-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnnouncementTable;
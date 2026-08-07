function FileTable({
  files,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Title</th>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">Featured</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>

          {files.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center p-8 text-gray-500"
              >
                No files uploaded yet.
              </td>
            </tr>
          ) : (
            files.map((file) => (
              <tr
                key={file.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">
                  {file.title}
                </td>

                <td className="p-4">
                  {file.category}
                </td>

                <td className="p-4">
                  {file.featured ? (
                    <span className="text-green-700 font-semibold">
                      ★ Featured
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      —
                    </span>
                  )}
                </td>

                <td className="p-4">

                  <div className="flex gap-3">

                    <button
                      onClick={() => onEdit(file)}
                      className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(file)}
                      className="px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
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

export default FileTable;
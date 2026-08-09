function AdminTable({
  columns,
  children,
}) {
  return (

    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[calc(100vh-9.5rem)] min-h-[80vh]">
      <div className="overflow-x-auto h-full">
        <div className="max-h-full overflow-y-auto">
          <table className="w-full table-fixed border-collapse min-w-full">
            <colgroup>
              {columns.map((column) => (
                <col
                  key={column.label}
                  style={{
                    width: column.width,
                  }}
                />
              ))}
            </colgroup>

            {/* Sticky table header */}
            <thead className="bg-white">
              <tr className="bg-white border-b border-gray-200">
                {columns.map((column) => (
                  <th
                    key={column.label}
                    className={`sticky top-0 z-30 px-6 py-3 bg-white text-sm font-semibold uppercase tracking-wide text-gray-600 ${column.className || ""}`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>{children}</tbody>
          </table>
        </div>
      </div>

    </div>

  );
}

export default AdminTable;
import AdminTable from "../../components/admin/AdminTable";
import TableActions from "../../components/admin/TableActions";

function AnnouncementTable({
  announcements,
  onEdit,
  onDelete,
}) {

  const columns = [
    {
      label: "Title",
      width: "auto",
      className: "text-left",
    },
    {
      label: "Published",
      width: "180px",
      className: "text-center",
    },
    {
      label: "Actions",
      width: "120px",
      className: "text-center",
    },
  ];

  return (

    <AdminTable columns={columns}>

      {announcements.length === 0 ? (

        <tr>

          <td
            colSpan={3}
            className="py-14 text-center text-gray-400"
          >
            No announcements found.
          </td>

        </tr>

      ) : (

        announcements.map((announcement) => (

          <tr
            key={announcement.id}
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
                  truncate
                  font-medium
                  text-gray-800
                "
                title={announcement.title}
              >
                {announcement.title}
              </div>

            </td>

            {/* Published */}

            <td className="px-6 py-5 text-center">

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  text-gray-600
                "
              >
                {announcement.date}
              </span>

            </td>

            {/* Actions */}

            <td className="px-6 py-5">

              <TableActions
                onEdit={() => onEdit(announcement)}
                onDelete={() => onDelete(announcement)}
              />

            </td>

          </tr>

        ))

      )}

    </AdminTable>

  );

}

export default AnnouncementTable;
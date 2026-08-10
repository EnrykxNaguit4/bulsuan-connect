import AdminTable from "../../components/admin/AdminTable";
import TableActions from "../../components/admin/TableActions";
import { FaStar } from "react-icons/fa";

function FileTable({
  files,
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
          label: "Category",
          width: "150px",
          className: "text-center",
        },

        {
          label: "Actions",
          width: "130px",
          className: "text-center",
        },

      ]}

    >

      {files.length === 0 ? (

        <tr>

          <td
            colSpan={3}
            className="py-14 text-center text-gray-500"
          >

            No files uploaded yet.

          </td>

        </tr>

      ) : (

        files.map((file) => (

          <tr

            key={file.id}

            className="
              border-b
              border-gray-200/70
              last:border-b-0

              hover:bg-red-50/40

              transition-colors
            "

          >

            <td className="px-6 py-5">

              <div
                className="
                  flex
                  items-center
                  gap-2

                  overflow-hidden
                "
              >

                {file.featured && (

                  <span
                    className="text-yellow-500"
                    title="Featured"
                  >
                    <FaStar className="inline-block" aria-hidden="true" />
                  </span>

                )}

                <span
                  className="
                    overflow-hidden
                    whitespace-nowrap
                    text-ellipsis

                    font-semibold
                    text-gray-800
                  "
                  title={file.title}
                >

                  {file.title}

                </span>

              </div>

            </td>

            {/* Category */}

            <td className="px-6 py-5 text-center">

              <span
                className="
                  inline-block

                  px-3
                  py-1

                  rounded-full

                  bg-gray-100

                  text-sm
                  text-gray-700
                "
              >

                {file.category}

              </span>

            </td>

            {/* Actions */}

            <td className="px-6 py-5">

              <TableActions

                onEdit={() => onEdit(file)}

                onDelete={() => onDelete(file)}

              />

            </td>

          </tr>

        ))

      )}

    </AdminTable>

  );

}

export default FileTable;
import AdminTable from "../../components/admin/AdminTable";
import TableActions from "../../components/admin/TableActions";

function getStatusBadge(status) {
  switch (status) {
    case "Pending":
      return (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-yellow-100
            px-3
            py-1
            text-[13px]
            font-semibold
            text-yellow-800
          "
        >
          Pending
        </span>
      );

    case "In Progress":
      return (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-[13px]
            font-semibold
            text-blue-800
          "
        >
          In Progress
        </span>
      );

    case "Resolved":
      return (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-green-100
            px-3
            py-1
            text-[13px]
            font-semibold
            text-green-800
          "
        >
          Resolved
        </span>
      );

    default:
      return (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-gray-100
            px-3
            py-1
            text-[13px]
            font-semibold
            text-gray-700
          "
        >
          {status}
        </span>
      );
  }
}

function formatDate(createdAt) {
  if (!createdAt) return "-";

  if (typeof createdAt?.toDate === "function") {
    return createdAt.toDate().toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return "-";
}

function ConcernTable({
  concerns,
  onView,
}) {

  return (

    <AdminTable
      columns={[
        {
          label: "Reference No.",
          width: "180px",
          className: "text-left",
        },
        {
          label: "Student",
          width: "auto",
          className: "text-left",
        },
        {
          label: "Category",
          width: "170px",
          className: "text-center",
        },
        {
          label: "Status",
          width: "160px",
          className: "text-center",
        },
        {
          label: "Submitted",
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

      {concerns.length === 0 ? (

        <tr>

          <td
            colSpan={6}
            className="py-14 text-center text-gray-500"
          >
            No submitted concerns.
          </td>

        </tr>

      ) : (

        concerns.map((concern) => (

          <tr
            key={concern.id}
            className="
              border-b
              border-gray-200/70
              last:border-b-0
              hover:bg-red-50/40
              transition-colors
            "
          >

            {/* Reference */}

            <td className="px-6 py-5">

              <span
  className="
    font-mono
    text-sm
    text-gray-700

    block
    overflow-hidden
    whitespace-nowrap
    text-ellipsis
  "
  title={concern.referenceNumber}
>
                {concern.referenceNumber}
              </span>

            </td>

            {/* Student */}

            <td className="px-6 py-5">

              <div
                className="
                  overflow-hidden
                  whitespace-nowrap
                  text-ellipsis

                  font-medium
                  text-gray-800
                "
                title={concern.fullName}
              >
                {concern.fullName}
              </div>

            </td>

            {/* Category */}

            <td className="px-6 py-5 text-center">

              <span
                className="
                  inline-block

                  rounded-full

                  bg-slate-100

                  px-3
                  py-1

                  text-sm

                  text-gray-700
                "
              >
                {concern.category}
              </span>

            </td>

            {/* Status */}

            <td className="px-6 py-5 text-center">

              {getStatusBadge(concern.status)}

            </td>

            {/* Submitted */}

            <td className="px-6 py-5 text-center">

              <span className="whitespace-nowrap text-sm text-gray-600">

                {formatDate(concern.createdAt)}

              </span>

            </td>

            {/* Actions */}

            <td className="px-6 py-5">

              <TableActions
                onView={() => onView(concern)}
              />

            </td>

          </tr>

        ))

      )}

    </AdminTable>

  );

}

export default ConcernTable;
function AdminTableHeader({ columns }) {
  return (
    <div
      className="
        sticky
        top-[156px]
        z-40

        bg-white

        rounded-t-2xl

        border
        border-gray-200
        border-b-0

        shadow-sm
      "
    >
      <div className="flex">

        {columns.map((column) => (

          <div
            key={column.label}
            style={{
              width: column.width,
              flex: column.width === "auto" ? 1 : "0 0 auto",
            }}
            className={`
              px-6
              py-4

              text-xs
              font-semibold
              uppercase
              tracking-wider

              text-gray-500

              ${column.className || ""}
            `}
          >
            {column.label}
          </div>

        ))}

      </div>
    </div>
  );
}

export default AdminTableHeader;
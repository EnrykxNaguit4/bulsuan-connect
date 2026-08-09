import {
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

function AdminPageHeader({
  title,
  description,
  search,
  setSearch,
  placeholder,
  buttonLabel,
  onAdd,
  columns,
}) {
  return (
    <div
      className="
        sticky
        top-0
        z-40

        bg-gray-50
      "
    >

      {/* Title */}

      <div className="pt-8">

        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-gray-500">
            {description}
          </p>
        )}

      </div>

      {/* Search */}

      <div className="py-6">

        <div className="flex gap-4">

          <div className="relative flex-1">

            <MagnifyingGlassIcon
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2

                w-5
                h-5

                text-gray-400
              "
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder={placeholder}
              className="
                w-full

                h-12

                rounded-xl

                border
                border-gray-300

                bg-white

                pl-11
                pr-4

                shadow-sm

                focus:outline-none
                focus:ring-2
                focus:ring-red-700

                transition
              "
            />

          </div>

          <button
            onClick={onAdd}
            className="
              flex
              items-center
              gap-2

              px-5

              rounded-xl

              bg-red-700

              hover:bg-red-800

              text-white

              font-semibold

              shadow-sm

              transition
            "
          >

            <PlusIcon className="w-5 h-5" />

            {buttonLabel}

          </button>

        </div>

      </div>

      {/* Table Header */}

      <div
        className="
          bg-white

          rounded-t-2xl

          border

          border-gray-200

          border-b-0
        "
      >

        <div
          className="
            grid

            px-6
            py-4

            text-xs

            uppercase

            tracking-wider

            font-semibold

            text-gray-500
          "
          style={{
            gridTemplateColumns: columns,
          }}
        >

          {Array.from(arguments)[0].headers?.map((header) => (
            <div
              key={header.label}
              className={header.align || ""}
            >
              {header.label}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminPageHeader;
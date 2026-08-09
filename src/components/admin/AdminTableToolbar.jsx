function AdminTableToolbar({
  search,
  setSearch,
  buttonLabel,
  onAdd,
  placeholder,
}) {
  return (
    <div className="mb-6">

      <div className="flex items-center gap-4">

        <div className="relative flex-1">

          <input
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              h-11

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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-5
              h-5
              text-gray-400
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />

          </svg>

        </div>

        {buttonLabel && (

          <button
            onClick={onAdd}
            className="
              h-11

              px-6

              rounded-xl

              bg-red-700
              hover:bg-red-800

              text-white
              font-semibold

              transition
            "
          >

            {buttonLabel}

          </button>

        )}

      </div>

    </div>
  );
}

export default AdminTableToolbar;
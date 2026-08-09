import Sidebar from "../Sidebar";

function AdminLayout({
  title,
  description,
  toolbar,
  children,
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <Sidebar />

      <main
        className="
          ml-64
          flex-1
          h-screen
          flex
          flex-col
          overflow-y-auto
        "
      >

        {/* Sticky Header */}

        <div
          className="
            sticky
            top-0
            z-50

            bg-gray-50

            border-b
            border-gray-200
          "
        >

          <div className="px-8 pt-8 pb-6">

            <h1 className="text-4xl font-bold text-gray-900">

              {title}

            </h1>

            {description && (

              <p className="mt-2 text-gray-500">

                {description}

              </p>

            )}

          </div>

          {toolbar && (

            <div className="px-8 pb-3">

              {toolbar}

            </div>

          )}

        </div>

        {/* Scrolling Content */}

        <div className="flex-1 min-h-0 overflow-y-auto px-8 pt-1 pb-4">

          {children}

        </div>

      </main>

    </div>
  );
}

export default AdminLayout;
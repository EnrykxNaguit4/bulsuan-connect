import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

function AdminLayout({
  title,
  description,
  action,
  children,
}) {
  return (

    <div className="min-h-screen bg-gray-50">

      <Sidebar />

      <main className="ml-64 min-h-screen">

        <div className="px-8">

          <Topbar
            title={title}
            description={description}
            action={action}
          />

          <div className="pb-8">

            {children}

          </div>

        </div>

      </main>

    </div>

  );
}

export default AdminLayout;
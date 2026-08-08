import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="ml-64 p-8 min-h-screen">
        <Topbar />

        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
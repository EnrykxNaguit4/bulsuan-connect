import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        <Topbar />

        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
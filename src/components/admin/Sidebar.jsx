import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Announcements", path: "/admin/announcements" },
    { name: "Events", path: "/admin/events" },
    { name: "Files", path: "/admin/files" },
    { name: "Concerns", path: "/admin/concerns" },
  ];

  return (
    <aside className="w-64 h-screen bg-green-800 text-white fixed left-0 top-0">
      <div className="p-6 border-b border-green-700">
        <h1 className="text-2xl font-bold">BulSUan Connect</h1>
        <p className="text-green-200 text-sm">
          Admin Portal
        </p>
      </div>

      <nav className="mt-6 flex flex-col">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-6 py-4 hover:bg-green-700 transition ${
                isActive ? "bg-green-700" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
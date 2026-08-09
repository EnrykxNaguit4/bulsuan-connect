import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import toast from "react-hot-toast";

import {
  FaTachometerAlt,
  FaBullhorn,
  FaCalendarAlt,
  FaFolderOpen,
  FaComments,
  FaSignOutAlt,
  FaUserShield,
  FaTools,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Announcements",
      path: "/admin/announcements",
      icon: <FaBullhorn />,
    },
    {
      name: "Events",
      path: "/admin/events",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Files",
      path: "/admin/files",
      icon: <FaFolderOpen />,
    },
    {
      name: "Concerns",
      path: "/admin/concerns",
      icon: <FaComments />,
    },
    {
      name: "Website Settings",
      path: "/admin/settings",
      icon: <FaTools />,
    },
  ];

  async function handleLogout() {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await signOut(auth);

      toast.success("Logged out successfully.");

      navigate("/admin/login");
    } catch (error) {
      console.error(error);

      toast.error("Failed to logout.");
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-red-600 text-white flex flex-col z-40">

      {/* Logo */}

      <div className="p-6 border-b border-red-700">

        <h1 className="text-2xl font-bold">
          BulSUan Connect
        </h1>

        <p className="text-red-200 text-sm mt-1">
          Admin Portal
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 mt-6">

        {menu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 transition hover:bg-red-700 ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>{item.name}</span>

          </NavLink>

        ))}

      </nav>

      {/* Bottom */}

      <div className="border-t border-red-800 p-5">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center">

            <FaUserShield />

          </div>

          <div>

            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-xs text-red-200">
              Logged In
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-900 hover:bg-red-300 transition rounded-xl py-3 font-semibold"
        >
          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
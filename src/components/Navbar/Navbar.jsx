import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Announcements", path: "/announcements" },
    { name: "Events", path: "/events" },
    { name: "Files", path: "/files" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-green-900">
            BulSUan Connect
          </h1>

          <p className="text-sm text-gray-500">
            Local Student Council • Hagonoy Campus
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-green-700 border-b-2 border-green-700 pb-1"
                    : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/concern"
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl transition"
          >
            Submit Concern
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
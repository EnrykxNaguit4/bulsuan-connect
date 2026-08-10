import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useSettings } from "../../context/WebsiteSettingsContext";

import {
  ShieldCheckIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
const { settings, loading } = useSettings();

  const [isConcernOpen, setIsConcernOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Announcements", path: "/announcements" },
    { name: "Events", path: "/events" },
    { name: "Files", path: "/files" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsConcernOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_40px_60px_-20px_rgba(15,23,42,0.25)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6">

        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-red-900 truncate">
            {settings?.websiteName || "BulSUan Connect"}
          </h1>

          <p className="text-sm text-gray-500 truncate">
            {settings?.organizationName || "Local Student Council"}
            {settings?.universityName ? ` • ${settings.universityName}` : ""}
            {settings?.campusName ? ` • ${settings.campusName}` : ""}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium pb-1 border-b-2 transition-all duration-200 ${
                    isActive
                      ? "border-red-700 text-red-700"
                      : "border-transparent text-gray-700 hover:text-red-700 hover:border-red-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block relative">
            <button
              onClick={() =>
                setIsConcernOpen((prev) => !prev)
              }
              className="flex items-center gap-2 bg-red-600 hover:bg-red-800 text-white px-5 py-3 rounded-xl transition shadow-sm"
            >
              <ShieldCheckIcon className="w-5 h-5" />
              <span className="font-medium">Concern</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-200 ${
                  isConcernOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isConcernOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden">
                <div className="px-6 py-5 bg-gray-50 border-b">
                  <h3 className="font-bold text-lg text-gray-800">
                    Student Services
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Submit a concern or monitor the status of an existing one.
                  </p>
                </div>

                <NavLink
                  to="/concern"
                  onClick={() => setIsConcernOpen(false)}
                  className="flex gap-4 px-6 py-5 hover:bg-red-50 transition"
                >
                  <div className="bg-red-100 rounded-xl p-3 h-fit">
                    <DocumentTextIcon className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Submit Concern
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 leading-6">
                      Report an issue, concern, complaint, or suggestion to the Student Government.
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  to="/track-concern"
                  onClick={() => setIsConcernOpen(false)}
                  className="flex gap-4 px-6 py-5 border-t hover:bg-red-50 transition"
                >
                  <div className="bg-blue-100 rounded-xl p-3 h-fit">
                    <MagnifyingGlassIcon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Track Concern
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 leading-6">
                      View the latest status and updates using your reference number.
                    </p>
                  </div>
                </NavLink>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 z-40 border-t border-gray-200 bg-white shadow-xl min-h-[calc(100vh-5rem)]">
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 font-medium transition ${
                      isActive
                        ? "bg-red-50 text-red-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 space-y-3">
              <Link
                to="/concern"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl bg-red-700 px-4 py-3 text-center text-white font-semibold hover:bg-red-800"
              >
                Submit a Concern
              </Link>
              <Link
                to="/track-concern"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-red-700 px-4 py-3 text-center text-red-700 font-semibold hover:bg-red-50"
              >
                Track Concern
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
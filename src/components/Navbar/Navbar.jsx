function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-purple-900">
            BulSUan Connect
          </h1>

          <p className="text-sm text-gray-500">
            Local Student Council • Student Government
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-purple-900 font-medium">

            <li className="cursor-pointer hover:text-purple-900 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-purple-900 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-purple-900 transition">
              Files
            </li>

            <li className="cursor-pointer hover:text-purple-900 transition">
              FAQ
            </li>

            <li className="cursor-pointer hover:text-purple-900 transition">
              Contact
            </li>

            <button
              className="
                bg-purple-800
                hover:bg-purple-900
                text-white
                px-5
                py-3
                rounded-xl
                transition
              "
            >
              Submit Concern
            </button>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
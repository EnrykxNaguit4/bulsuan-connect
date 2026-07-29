function Topbar() {
  return (
    <header className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center mb-8">
      <div>
        <h2 className="text-xl font-semibold">
          Local Student Council
        </h2>

        <p className="text-gray-500 text-sm">
          BulSUan Connect Admin Portal
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          Administrator
        </p>

        <p className="text-sm text-gray-500">
          Logged In
        </p>
      </div>
    </header>
  );
}

export default Topbar;
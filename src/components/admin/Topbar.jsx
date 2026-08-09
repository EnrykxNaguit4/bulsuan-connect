function Topbar() {

  return (

    <header
      className="
        sticky
        top-0
        z-50

        h-16

        bg-white

        border-b

        border-gray-200
      "
    >

      <div className="h-full px-8 flex items-center justify-between">

        <div>

          <h2 className="font-bold text-lg">

            BulSUan Connect

          </h2>

          <p className="text-xs text-gray-500">

            Local Student Council Admin Portal

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

      </div>

    </header>

  );

}

export default Topbar;
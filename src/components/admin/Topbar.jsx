function Topbar({
  title,
  description,
  action,
}) {
  return (

    <header
      className="
        sticky
        top-0
        z-30
        bg-white/90
        backdrop-blur-md
        border-b
        border-gray-200
        mb-8
      "
    >

      <div className="flex items-start justify-between py-6">

        {/* Left */}

        <div>

          <h1 className="text-3xl font-bold text-gray-900">

            {title}

          </h1>

          {description && (

            <p className="text-gray-500 mt-2">

              {description}

            </p>

          )}

        </div>

        {/* Right */}

        {action && (

          <div className="flex items-center">

            {action}

          </div>

        )}

      </div>

    </header>

  );
}

export default Topbar;
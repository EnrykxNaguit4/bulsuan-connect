import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function DashboardSection({
  title,
  viewAll,
  children,
}) {
  return (
    <section className="mt-12">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold text-gray-900">

          {title}

        </h2>

        {viewAll && (

          <Link
            to={viewAll}
            className="
              flex
              items-center
              gap-1
              text-red-700
              hover:text-red-800
              font-medium
              transition
            "
          >
            View All

            <ChevronRightIcon className="w-4 h-4" />

          </Link>

        )}

      </div>

      {children}

    </section>
  );
}

export default DashboardSection;
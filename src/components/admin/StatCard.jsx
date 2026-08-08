import {
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}) {

  return (

    <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-500 text-sm">

            {title}

          </p>

          <h2 className="text-4xl font-bold mt-3">

            {value}

          </h2>

          <p className="text-gray-400 text-sm mt-3">

            {description}

          </p>

        </div>

        <div className="bg-purple-100 rounded-xl p-3">

          {Icon && (

            <Icon className="w-7 h-7 text-purple-700" />

          )}

        </div>

      </div>

    </div>

  );

}

export default StatCard;
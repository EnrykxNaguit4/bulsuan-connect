import { useNavigate } from "react-router-dom";

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  path,
}) {

  const navigate = useNavigate();

  return (

    <div
      onClick={() => navigate(path)}
      className="
        group
        bg-white
        rounded-2xl
        border
        shadow-sm
        p-6
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

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

        <div
          className="
            bg-red-100
            rounded-xl
            p-3
            transition
            group-hover:bg-red-700
          "
        >

          {Icon && (

            <Icon
              className="
                w-7
                h-7
                text-red-700
                transition
                group-hover:text-white
              "
            />

          )}

        </div>

      </div>

    </div>

  );

}

export default StatCard;
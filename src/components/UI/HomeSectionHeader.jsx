import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function HomeSectionHeader({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex items-end justify-between mb-8">

      <div>

        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-500 mt-2">
            {subtitle}
          </p>
        )}

      </div>

      {buttonText && (
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 text-red-700 font-semibold hover:underline"
        >
          {buttonText}
          <FaArrowRight className="inline-block" aria-hidden="true" />
        </Link>
      )}

    </div>
  );
}

export default HomeSectionHeader;
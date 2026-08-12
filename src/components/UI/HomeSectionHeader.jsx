import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function HomeSectionHeader({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between">

        {/* Title + Subtitle */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-gray-500 text-sm md:text-base max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desktop Button */}
        {buttonText && (
          <Link
            to={buttonLink}
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              text-red-700
              font-semibold
              hover:underline
            "
          >
            {buttonText}
            <FaArrowRight aria-hidden="true" />
          </Link>
        )}

      </div>

      {/* Mobile Button */}
      {buttonText && (
        <div className="mt-4 flex justify-end md:hidden">
          <Link
            to={buttonLink}
            className="
              inline-flex
              items-center
              gap-2
              text-red-700
              font-semibold
              hover:underline
            "
          >
            {buttonText}
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomeSectionHeader;
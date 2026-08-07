import { Link } from "react-router-dom";

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
          className="text-green-700 font-semibold hover:underline"
        >
          {buttonText} →
        </Link>
      )}

    </div>
  );
}

export default HomeSectionHeader;
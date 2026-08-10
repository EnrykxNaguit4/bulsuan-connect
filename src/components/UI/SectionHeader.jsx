import { FaArrowRight } from "react-icons/fa";

function SectionHeader({ title, subtitle, actionText, onAction }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-gray-600 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <button
          onClick={onAction}
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition"
        >
          {actionText}
          <FaArrowRight className="inline-block" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;
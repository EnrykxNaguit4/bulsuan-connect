import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function CollapsibleSection({
  icon: Icon,
  title,
  description,
  defaultOpen = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-8 py-6 hover:bg-gray-50 transition"
      >

        <div className="flex items-start gap-4 text-left">

          <div className="bg-red-100 text-red-700 rounded-xl p-3">

            <Icon className="w-6 h-6" />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              {title}
            </h2>

            <p className="text-gray-500 mt-1">
              {description}
            </p>

          </div>

        </div>

        <ChevronDownIcon
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />

      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1200px]" : "max-h-0"
        }`}
      >
        <div className="border-t p-8">
          {children}
        </div>
      </div>

    </div>
  );
}

export default CollapsibleSection;
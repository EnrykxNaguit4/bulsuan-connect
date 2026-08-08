import { FaCommentDots } from "react-icons/fa";

function QuickActions() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <div className="flex flex-col items-center text-center">

          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
            <FaCommentDots className="text-3xl text-purple-700" />
          </div>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Your Voice Matters
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Raise concerns, report issues, or ask for assistance.
            Your concern will be received by the Local Student Council
            and handled confidentially.
          </p>

          <button
            className="
              mt-8
              bg-purple-700
              hover:bg-purple-800
              text-white
              px-8
              py-4
              rounded-xl
              text-lg
              font-semibold
              transition
            "
          >
            Submit a Concern
          </button>

        </div>

      </div>
    </section>
  );
}

export default QuickActions;
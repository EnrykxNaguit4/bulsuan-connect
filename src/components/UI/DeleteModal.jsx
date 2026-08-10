import { FaTrashAlt } from "react-icons/fa";

function DeleteModal({
  title,
  message,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">

        <div className="text-center">

          <div className="text-5xl mb-4 text-red-600">
            <FaTrashAlt className="mx-auto" aria-hidden="true" />
          </div>

          <h2 className="text-2xl font-bold text-red-600">
            {title}
          </h2>

          <p className="mt-5 text-gray-600">
            {message}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            This action cannot be undone.
          </p>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onCancel}
            className="border px-5 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;
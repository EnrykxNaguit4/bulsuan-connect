import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  createFile,
  updateFile,
} from "./fileService";

function FileModal({
  file,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Forms",
    url: "",
    featured: false,
  });

  useEffect(() => {
    if (file) {
      setFormData({
        title: file.title || "",
        description: file.description || "",
        category: file.category || "Forms",
        url: file.url || "",
        featured: file.featured || false,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        category: "Forms",
        url: "",
        featured: false,
      });
    }
  }, [file]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.url
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      if (file) {
        await updateFile(file.id, formData);

        toast.success("File updated successfully!");
      } else {
        await createFile({
          ...formData,
          createdAt: new Date(),
        });

        toast.success("File published successfully!");
      }

      onSuccess();
      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-5">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            {file ? "Edit File" : "New File"}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-5">

            <label className="font-medium">
              Title
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            />

          </div>

          <div className="mb-5">

            <label className="font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            />

          </div>

          <div className="mb-5">

            <label className="font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            >
              <option>Forms</option>
              <option>Handbook</option>
              <option>Memorandum</option>
              <option>Policies</option>
              <option>Guidelines</option>
              <option>Others</option>
            </select>

          </div>

          <div className="mb-5">

            <label className="font-medium">
              Google Drive Link
            </label>

            <input
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
              className="w-full border rounded-xl mt-2 p-3"
            />

          </div>

          <div className="flex items-center gap-3 mt-6">

            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />

            <label>
              Featured File
            </label>

          </div>

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl"
            >
              {file ? "Save Changes" : "Publish File"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default FileModal;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createAnnouncement,
  updateAnnouncement,
} from "./announcementService";

function AnnouncementModal({
  announcement,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    featured: false,
  });

  useEffect(() => {
    if (announcement) {
      setFormData({
        title: announcement.title || "",
        description: announcement.description || "",
        date: announcement.date || "",
        image: announcement.image || "",
        featured: announcement.featured || false,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        date: "",
        image: "",
        featured: false,
      });
    }
  }, [announcement]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.date
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

   try {

  if (announcement) {

    await updateAnnouncement(
      announcement.id,
      formData
    );

    toast.success(
      "Announcement updated successfully!"
    );

  } else {

    await createAnnouncement({
      ...formData,
      createdAt: new Date(),
    });

    toast.success(
      "Announcement published successfully!"
    );

  }

  onSuccess();
  onClose();

} catch (error) {

  console.error(error);

  toast.error(
    "Something went wrong."
  );

}
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8 my-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            {announcement
              ? "Edit Announcement"
              : "New Announcement"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
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
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            />
          </div>

          <div className="mb-5">
            <label className="font-medium">
              Image URL
            </label>

            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
              placeholder="https://..."
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
              Featured Announcement
            </label>

          </div>

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-red-700 text-white hover:bg-red-800"
            >
              {announcement
                ? "Save Changes"
                : "Publish"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AnnouncementModal;
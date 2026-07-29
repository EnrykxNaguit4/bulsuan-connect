import { useState } from "react";
import { createAnnouncement } from "./announcementService";

function AnnouncementModal({ onClose }) {
  
  const [formData, setFormData] = useState({
  title: "",
  description: "",
  date: "",
  image: "",
});

function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
}

async function handleSubmit(e) {
  e.preventDefault();

  if (
    !formData.title ||
    !formData.description ||
    !formData.date
  ) {
    alert("Please complete all required fields.");
    return;
  }

  try {
    await createAnnouncement({
      ...formData,
      createdAt: new Date(),
    });

    alert("Announcement published!");

    onClose();
  } catch (error) {
    console.error(error);
    alert("Failed to publish announcement.");
  }
}

    return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            New Announcement
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
  placeholder="Enter announcement title"
/>
          </div>

          <div className="mb-5">
            <label className="font-medium">
              Description
            </label>

            <textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  rows="5"
  className="w-full border rounded-xl mt-2 p-3"
  placeholder="Enter description"
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

          <div className="mb-8">
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

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
  type="submit"
  className="px-5 py-3 rounded-xl bg-green-700 text-white hover:bg-green-800"
>
  Publish
</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default AnnouncementModal;
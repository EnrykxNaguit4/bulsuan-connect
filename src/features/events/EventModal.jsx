import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  createEvent,
  updateEvent,
} from "./eventService";

function EventModal({
  event,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    venue: "",
    image: "",
    featured: false,
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || "",
        description: event.description || "",
        date: event.date || "",
        startTime: event.startTime || "",
        endTime: event.endTime || "",
        venue: event.venue || "",
        image: event.image || "",
        featured: event.featured || false,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        date: "",
        startTime: "",
        endTime: "",
        venue: "",
        image: "",
        featured: false,
      });
    }
  }, [event]);

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
      !formData.date ||
      !formData.startTime ||
      !formData.endTime ||
      !formData.venue
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      if (event) {
        await updateEvent(event.id, formData);

        toast.success(
          "Event updated successfully!"
        );

      } else {
        await createEvent({
          ...formData,
          createdAt: new Date(),
        });

        toast.success(
          "Event published successfully!"
        );
      }

      onSuccess();
      onClose();

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to save event."
      );
    }
  }

return (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto p-4">
  <div className="bg-white rounded-2xl w-full max-w-2xl p-8 my-8 max-h-[105vh] overflow-y-auto">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold">
          {event ? "Edit Event" : "New Event"}
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
            Event Title
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

        <div className="grid md:grid-cols-2 gap-5">

          <div>
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

          <div>
            <label className="font-medium">
              Venue
            </label>

            <input
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            />
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">

          <div>
            <label className="font-medium">
              Start Time
            </label>

            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            />
          </div>

          <div>
            <label className="font-medium">
              End Time
            </label>

            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full border rounded-xl mt-2 p-3"
            />
          </div>

        </div>

        <div className="mt-5">
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
            Featured Event
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
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl"
          >
            {event ? "Save Changes" : "Publish Event"}
          </button>

        </div>

           </form>

    </div>
  </div>
);
}

export default EventModal;
import AdminLayout from "../../components/admin/Layout/AdminLayout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import EventTable from "../../features/events/EventTable";
import EventModal from "../../features/events/EventModal";
import DeleteModal from "../../components/UI/DeleteModal";

import {
  getEvents,
  deleteEvent,
} from "../../features/events/eventService";

function Events() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  async function loadEvents() {
    const data = await getEvents();
    setEvents(data);
  }

  async function handleDelete() {
    try {
      await deleteEvent(eventToDelete.id);

      toast.success("Event deleted successfully!");

      setShowDeleteModal(false);
      setEventToDelete(null);

      loadEvents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event.");
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <AdminLayout>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Events
          </h1>

          <p className="text-gray-500 mt-2">
            Manage events shown on the student website.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedEvent(null);
            setShowModal(true);
          }}
          className="bg-purple-700 hover:bg-purple-900 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          + New Event
        </button>

      </div>

      <EventTable
        events={events}
        onEdit={(event) => {
          setSelectedEvent(event);
          setShowModal(true);
        }}
        onDelete={(event) => {
          setEventToDelete(event);
          setShowDeleteModal(true);
        }}
      />

      {showModal && (
        <EventModal
          event={selectedEvent}
          onClose={() => {
            setShowModal(false);
            setSelectedEvent(null);
          }}
          onSuccess={loadEvents}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          title="Delete Event"
          message={`Are you sure you want to delete "${eventToDelete?.title}"?`}
          onCancel={() => {
            setShowDeleteModal(false);
            setEventToDelete(null);
          }}
          onConfirm={handleDelete}
        />
      )}

    </AdminLayout>
  );
}

export default Events;
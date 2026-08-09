import AdminLayout from "../../components/admin/Layout/AdminLayout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import EventTable from "../../features/events/EventTable";
import EventModal from "../../features/events/EventModal";
import DeleteModal from "../../components/UI/DeleteModal";

import AdminTableToolbar from "../../components/admin/AdminTableToolbar";

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

const [search, setSearch] = useState("");

const filteredEvents =
  events.filter((event) => {

    const keyword = search.toLowerCase();

    return (
      event.title
        ?.toLowerCase()
        .includes(keyword) ||

      event.venue
        ?.toLowerCase()
        .includes(keyword)
    );

});

  async function loadEvents() {

    const data = await getEvents();

    setEvents(data);

  }

  useEffect(() => {

    loadEvents();

  }, []);

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

  return (

    <AdminLayout
      title="Events"
      description="Manage events shown on the student website."
      toolbar={
        <AdminTableToolbar
          search={search}
          setSearch={setSearch}
          placeholder="Search events..."
          buttonLabel="+ New Event"
          onAdd={() => {
            setSelectedEvent(null);
            setShowModal(true);
          }}
        />
      }
    >

<EventTable
    events={filteredEvents}
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
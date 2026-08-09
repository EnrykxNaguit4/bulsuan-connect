import AdminLayout from "../../components/admin/Layout/AdminLayout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AnnouncementTable from "../../features/announcements/AnnouncementTable";
import AnnouncementModal from "../../features/announcements/AnnouncementModal";
import DeleteModal from "../../components/UI/DeleteModal";

import {
  getAnnouncements,
  deleteAnnouncement,
} from "../../features/announcements/announcementService";

function Announcements() {

  const [announcements, setAnnouncements] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  async function loadAnnouncements() {

    const data = await getAnnouncements();

    setAnnouncements(data);

  }

  useEffect(() => {

    loadAnnouncements();

  }, []);

  async function handleDelete() {

    try {

      await deleteAnnouncement(announcementToDelete.id);

      toast.success("Announcement deleted successfully!");

      setShowDeleteModal(false);

      setAnnouncementToDelete(null);

      loadAnnouncements();

    } catch (error) {

      console.error(error);

      toast.error("Failed to delete announcement.");

    }

  }

  return (

    <AdminLayout
      title="Announcements"
      description="Manage announcements shown on the student website."
      action={
        <button
          onClick={() => {
            setSelectedAnnouncement(null);
            setShowModal(true);
          }}
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          + New Announcement
        </button>
      }
    >

      <AnnouncementTable
        announcements={announcements}
        onEdit={(announcement) => {
          setSelectedAnnouncement(announcement);
          setShowModal(true);
        }}
        onDelete={(announcement) => {
          setAnnouncementToDelete(announcement);
          setShowDeleteModal(true);
        }}
      />

      {showModal && (
        <AnnouncementModal
          announcement={selectedAnnouncement}
          onClose={() => {
            setShowModal(false);
            setSelectedAnnouncement(null);
          }}
          onSuccess={loadAnnouncements}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          title="Delete Announcement"
          message={`Are you sure you want to delete "${announcementToDelete?.title}"?`}
          onCancel={() => {
            setShowDeleteModal(false);
            setAnnouncementToDelete(null);
          }}
          onConfirm={handleDelete}
        />
      )}

    </AdminLayout>

  );

}

export default Announcements;
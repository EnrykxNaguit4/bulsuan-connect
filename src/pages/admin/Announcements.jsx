import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/admin/Layout/AdminLayout";
import AdminTableToolbar from "../../components/admin/AdminTableToolbar";


import AnnouncementTable from "../../features/announcements/AnnouncementTable";
import AnnouncementModal from "../../features/announcements/AnnouncementModal";

import DeleteModal from "../../components/UI/DeleteModal";

import {
  getAnnouncements,
  deleteAnnouncement,
} from "../../features/announcements/announcementService";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  const columns = [
    {
      label: "Title",
      width: "auto",
      className: "text-left",
    },
    {
      label: "Published",
      width: "180px",
      className: "text-center",
    },
    {
      label: "Actions",
      width: "130px",
      className: "text-center",
    },
  ];

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

  const filteredAnnouncements = announcements.filter((announcement) => {
    const keyword = search.toLowerCase();

    return (
      announcement.title?.toLowerCase().includes(keyword) ||
      announcement.description?.toLowerCase().includes(keyword)
    );
  });

  return (
    <AdminLayout
      title="Announcements"
      description="Manage announcements shown on the student website."
      toolbar={
        <AdminTableToolbar
          search={search}
          setSearch={setSearch}
          placeholder="Search announcements..."
          buttonLabel="+ New Announcement"
          onAdd={() => {
            setSelectedAnnouncement(null);
            setShowModal(true);
          }}
        />
      }
    >

    

      <AnnouncementTable
        announcements={filteredAnnouncements}
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
import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/Layout/AdminLayout";

import FileTable from "../../features/files/FileTable";
import FileModal from "../../features/files/FileModal";
import DeleteModal from "../../components/UI/DeleteModal";

import {
  getFiles,
  deleteFile,
} from "../../features/files/fileService";

import toast from "react-hot-toast";

function Files() {

  const [files, setFiles] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [fileToDelete, setFileToDelete] = useState(null);

  async function loadFiles() {

    const data = await getFiles();

    setFiles(data);

  }

  useEffect(() => {

    loadFiles();

  }, []);

  async function handleDelete() {

    try {

      await deleteFile(fileToDelete.id);

      toast.success("File deleted successfully!");

      setShowDeleteModal(false);

      setFileToDelete(null);

      loadFiles();

    } catch (error) {

      console.error(error);

      toast.error("Failed to delete file.");

    }

  }

  return (

    <AdminLayout
      title="Files"
      description="Manage downloadable files shown on the student website."
      action={
        <button
          onClick={() => {
            setSelectedFile(null);
            setShowModal(true);
          }}
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          + New File
        </button>
      }
    >

      <FileTable
        files={files}
        onEdit={(file) => {
          setSelectedFile(file);
          setShowModal(true);
        }}
        onDelete={(file) => {
          setFileToDelete(file);
          setShowDeleteModal(true);
        }}
      />

      {showModal && (
        <FileModal
          file={selectedFile}
          onClose={() => {
            setShowModal(false);
            setSelectedFile(null);
          }}
          onSuccess={loadFiles}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          title="Delete File"
          message={`Are you sure you want to delete "${fileToDelete?.title}"?`}
          onCancel={() => {
            setShowDeleteModal(false);
            setFileToDelete(null);
          }}
          onConfirm={handleDelete}
        />
      )}

    </AdminLayout>

  );

}

export default Files;
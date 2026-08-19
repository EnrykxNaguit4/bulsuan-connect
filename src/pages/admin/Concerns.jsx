import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/Layout/AdminLayout";

import ConcernTable from "../../features/concerns/ConcernTable";
import ConcernModal from "../../features/concerns/ConcernModal";

import {
  getConcerns,
} from "../../features/concerns/concernService";

function Concerns() {

  const [concerns, setConcerns] = useState([]);

  const [selectedConcern, setSelectedConcern] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(true);

  async function loadConcerns() {

    try {

      setIsLoading(true);

      const data = await getConcerns();

      setConcerns(data);

    } catch (error) {

      console.error(
        "Failed to load concerns:",
        error
      );

      setConcerns([]);

    } finally {

      setIsLoading(false);

    }

  }

  useEffect(() => {

    loadConcerns();

  }, []);

  return (

    <AdminLayout
      title="Student Concerns"
      description="Review, manage, and update submitted student concerns."
    >

      {isLoading ? (

        <div className="bg-white border rounded-2xl p-14 text-center">

          <div className="mx-auto h-10 w-10 rounded-full border-4 border-[#FAEAEA] border-t-[#9A1C27] animate-spin" />

          <p className="mt-4 text-gray-500">
            Loading submitted concerns...
          </p>

        </div>

      ) : (

        <ConcernTable
          concerns={concerns}
          onView={(concern) => {

            setSelectedConcern(concern);

            setShowModal(true);

          }}
        />

      )}

      {showModal && (

        <ConcernModal
          concern={selectedConcern}
          onClose={() => {

            setShowModal(false);

            setSelectedConcern(null);

          }}
          onSuccess={loadConcerns}
        />

      )}

    </AdminLayout>

  );

}

export default Concerns;
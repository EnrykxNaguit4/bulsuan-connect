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

  async function loadConcerns() {

    const data = await getConcerns();

    setConcerns(data);

  }

  useEffect(() => {

    loadConcerns();

  }, []);

  return (

    <AdminLayout>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Student Concerns
          </h1>

          <p className="text-gray-500 mt-2">
            Review, manage, and update submitted student concerns.
          </p>

        </div>

      </div>

      <ConcernTable
        concerns={concerns}
        onView={(concern) => {

          setSelectedConcern(concern);

          setShowModal(true);

        }}
      />

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
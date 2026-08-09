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

    <AdminLayout
      title="Student Concerns"
      description="Review, manage, and update submitted student concerns."
    >

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
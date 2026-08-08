import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateConcern } from "./concernService";

import { sendStatusEmail } from "../email/emailService";

function ConcernModal({
  concern,
  onClose,
  onSuccess,
}) {

  const [formData, setFormData] = useState({
    status: "",
    statusRemarks: "",
  });

const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {

    if (concern) {

      setFormData({
        status: concern.status || "Pending",
        statusRemarks:
          concern.statusRemarks || "",
      });

    }

  }, [concern]);

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  async function handleSave() {

  setIsSaving(true);

  try {

    await updateConcern(
      concern.id,
      formData
    );

    // Send email ONLY if the status changed

    if (formData.status !== concern.status) {

      await sendStatusEmail({

        studentName: concern.fullName,

        toEmail: concern.email,

        referenceNumber:
          concern.referenceNumber,

        status: formData.status,

        remarks:
          formData.statusRemarks,

      });

    }

    toast.success(
      "Concern updated successfully!"
    );

    onSuccess();

    onClose();

  } catch (error) {

    console.error(error);

    toast.error(
      "Failed to update concern."
    );

  } finally {

    setIsSaving(false);

  }

}

  return (

    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl">

        {/* HEADER */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center rounded-t-3xl">

          <div>

            <h2 className="text-3xl font-bold">
              Concern Details
            </h2>

            <p className="text-gray-500 mt-1">
              Review and manage a submitted concern.
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>

        </div>

        <div className="p-8 space-y-8">

          {/* REFERENCE */}

          <section className="border rounded-2xl p-6">

            <h3 className="font-semibold text-gray-500 uppercase text-sm tracking-wide">
              Reference Number
            </h3>

            <div className="flex justify-between items-center mt-3">

              <p className="text-2xl font-bold">
                {concern.referenceNumber}
              </p>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold
                ${
                  concern.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : concern.status === "In Progress"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-purple-100 text-purple-800"
                }`}
              >
                {concern.status}
              </span>

            </div>

          </section>

          {/* STUDENT INFORMATION */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Student Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>

                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold mt-1">
                  {concern.fullName}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Student Number
                </p>

                <p className="font-semibold mt-1">
                  {concern.studentNumber}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Course
                </p>

                <p className="font-semibold mt-1">
                  {concern.course}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Year Level
                </p>

                <p className="font-semibold mt-1">
                  {concern.yearLevel}
                </p>

              </div>

            </div>

          </section>

                    {/* ===========================================
              CONCERN INFORMATION
          =========================================== */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Concern Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>

                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="font-semibold mt-1">
                  {concern.category}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Subject
                </p>

                <p className="font-semibold mt-1">
                  {concern.subject}
                </p>

              </div>

            </div>

            <div className="mt-6">

              <p className="text-sm text-gray-500">
                Concern Description
              </p>

              <div className="mt-2 bg-gray-50 rounded-xl p-5 whitespace-pre-wrap leading-7">
                {concern.concern}
              </div>

            </div>

          </section>

          {/* ===========================================
              INCIDENT INFORMATION
          =========================================== */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Incident Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>

                <p className="text-sm text-gray-500">
                  Date of Incident
                </p>

                <p className="font-semibold mt-1">
                  {concern.incidentDate || "Not provided"}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Approximate Time
                </p>

                <p className="font-semibold mt-1">
                  {concern.incidentTime || "Not provided"}
                </p>

              </div>

            </div>

          </section>

          {/* ===========================================
              SUPPORTING EVIDENCE
          =========================================== */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Supporting Evidence
            </h3>

            {concern.supportingEvidence ? (

              <a
                href={concern.supportingEvidence}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
              >
                🔗 Open Supporting Evidence
              </a>

            ) : (

              <p className="mt-5 text-gray-500">
                No supporting evidence was provided.
              </p>

            )}

          </section>

          {/* ===========================================
              CONTACT INFORMATION
          =========================================== */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>

                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <p className="font-semibold mt-1 break-all">
                  {concern.email}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Preferred Contact
                </p>

                <p className="font-semibold mt-1">
                  {concern.otherContactType || "None"}
                </p>

              </div>

            </div>

            <div className="mt-6">

              <p className="text-sm text-gray-500">
                Contact Details
              </p>

              <p className="font-semibold mt-1 break-all">
                {concern.otherContact || "Not provided"}
              </p>

            </div>

          </section>

          {/* ===========================================
              PRIVACY PREFERENCE
          =========================================== */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Privacy Preference
            </h3>

            <div className="mt-5">

             <span
  className={`px-4 py-2 rounded-full font-medium ${
    concern.disclosurePreference === "Anonymous"
      ? "bg-purple-100 text-purple-700"
      : "bg-purple-100 text-purple-700"
  }`}
>
  {concern.disclosurePreference}
</span>
            </div>

          </section>

                    {/* ===========================================
              RESOLUTION
          =========================================== */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Resolution
            </h3>

            <p className="text-gray-500 mt-2">
              Update the current status of this concern and provide remarks for the student.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div>

                <label className="block text-sm font-medium mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>

              </div>

            </div>

            <div className="mt-8">

              <label className="block text-sm font-medium mb-2">
                Status Remarks
              </label>

              <textarea
                name="statusRemarks"
                value={formData.statusRemarks}
                onChange={handleChange}
                rows={6}
                placeholder="Enter remarks that may later be included in the email notification..."
                className="w-full border rounded-xl p-4 resize-none"
              />

            </div>

          </section>

          {/* ===========================================
              ACTION BUTTONS
          =========================================== */}

          <div className="flex justify-end gap-4 pb-2">

            <button
              onClick={onClose}
              className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl transition"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>

          </div>

                  </div>

      </div>

    </div>

  );

}

export default ConcernModal;
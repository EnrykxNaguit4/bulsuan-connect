import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

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
        statusRemarks: concern.statusRemarks || "",
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

      // Send email only if the status changed.
      if (formData.status !== concern.status) {
        await sendStatusEmail({
          studentName: concern.fullName,
          toEmail: concern.email,
          referenceNumber: concern.referenceNumber,
          status: formData.status,
          remarks: formData.statusRemarks,
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

  function getStatusStyle(status) {
    switch (status) {
      case "Pending":
        return "bg-[#FAEAEA] text-[#9A1C27]";

      case "In Progress":
        return "bg-[#9A1C27]/15 text-[#5E1017]";

      case "Resolved":
        return "bg-[#5E1017] text-white";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl">

        {/* HEADER */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center rounded-t-3xl z-10">

          <div>
            <h2 className="text-3xl font-bold text-[#5E1017]">
              Concern Details
            </h2>

            <p className="text-gray-500 mt-1">
              Review and manage a submitted concern.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-[#9A1C27] transition"
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

              <p className="text-2xl font-bold text-[#9A1C27]">
                {concern.referenceNumber}
              </p>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusStyle(
                  concern.status
                )}`}
              >
                {concern.status}
              </span>

            </div>

          </section>

          {/* STUDENT INFORMATION */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
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
                  {concern.program}
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

              <div>
                <p className="text-sm text-gray-500">
                  Section
                </p>

                <p className="font-semibold mt-1">
                  {concern.section}
                </p>
              </div>

            </div>

          </section>

          {/* CONCERN INFORMATION */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
              Concern Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>
                <p className="text-sm text-gray-500">
                  Nature of Concern
                </p>

                <p className="font-semibold mt-1">
                  {concern.natureOfConcern}
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

              <div className="mt-2 bg-[#FAEAEA]/50 rounded-xl p-5 whitespace-pre-wrap leading-7">
                {concern.concern}
              </div>

            </div>

          </section>

          {/* INCIDENT INFORMATION */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
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

          {/* SUPPORTING EVIDENCE */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
              Supporting Evidence
            </h3>

            {concern.supportingEvidence ? (

              <a
                href={concern.supportingEvidence}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 bg-[#5E1017] hover:bg-[#9A1C27] text-white px-5 py-3 rounded-xl transition"
              >
                <ArrowTopRightOnSquareIcon
                  className="w-5 h-5"
                  aria-hidden="true"
                />

                Open Supporting Evidence
              </a>

            ) : (

              <p className="mt-5 text-gray-500">
                No supporting evidence was provided.
              </p>

            )}

          </section>

          {/* CONTACT INFORMATION */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
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

          {/* CONFIDENTIALITY PREFERENCE */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
              Confidentiality Preference
            </h3>

            <p className="text-gray-500 mt-2">
              This indicates how the student's identity should be
              handled when the concern is forwarded or referred.
            </p>

            <div className="mt-5">

              <span
                className={`inline-flex px-4 py-2 rounded-full font-semibold ${
                  concern.disclosurePreference ===
                  "Full Disclosure"
                    ? "bg-[#9A1C27]/15 text-[#5E1017]"
                    : "bg-[#FAEAEA] text-[#9A1C27]"
                }`}
              >
                {concern.disclosurePreference ||
                  "Not specified"}
              </span>

            </div>

          </section>

          {/* RESOLUTION */}

          <section className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-[#5E1017]">
              Resolution
            </h3>

            <p className="text-gray-500 mt-2">
              Update the current status of this concern and
              provide remarks for the student.
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
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FAEAEA] focus:border-[#9A1C27]"
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
                className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#FAEAEA] focus:border-[#9A1C27]"
              />

            </div>

          </section>

          {/* ACTION BUTTONS */}

          <div className="flex justify-end gap-4 pb-2">

            <button
              onClick={onClose}
              className="border px-6 py-3 rounded-xl hover:bg-[#FAEAEA] transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-[#5E1017] hover:bg-[#9A1C27] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition"
            >
              {isSaving
                ? "Saving..."
                : "Save Changes"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ConcernModal;
import { useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar/Navbar";

import { createConcern } from "../features/concerns/concernService";

function Concern() {

  const categories = [
    "Academic Unfairness / Grading Discrepancies",
    "Administrative Delays",
    "Facilities & Campus Infrastructure",
    "Student Welfare / Discrimination / Harassment",
    "Enrollment & Registration",
    "Suggestion / Feedback",
    "Others",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    studentNumber: "",
    email: "",
    course: "",
    yearLevel: "",

    category: "",
    subject: "",
    concern: "",

    incidentDate: "",
    incidentTime: "",

    supportingEvidence: "",

    otherContactType: "None",
    otherContact: "",

    disclosurePreference: "Anonymous",

    dataPrivacyConsent: false,
    goodFaithDeclaration: false,
  });

  const [showConfirmModal, setShowConfirmModal] =
    useState(false);

  const [showSuccessModal, setShowSuccessModal] =
    useState(false);

  const [generatedReference, setGeneratedReference] =
    useState("");

  function handleChange(e) {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({
      ...formData,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    });

  }

  function validateForm() {

    if (
      !formData.fullName ||
      !formData.studentNumber ||
      !formData.email ||
      !formData.course ||
      !formData.yearLevel ||
      !formData.category ||
      !formData.subject ||
      !formData.concern
    ) {

      toast.error(
        "Please complete all required fields."
      );

      return false;

    }

    if (
      !formData.dataPrivacyConsent
    ) {

      toast.error(
        "You must agree to the Data Privacy Consent."
      );

      return false;

    }

    if (
      !formData.goodFaithDeclaration
    ) {

      toast.error(
        "You must agree to the Good Faith Declaration."
      );

      return false;

    }

    if (
      formData.otherContactType !== "None" &&
      !formData.otherContact
    ) {

      toast.error(
        "Please provide your selected contact information."
      );

      return false;

    }

    return true;

  }

  function handleOpenConfirmation(e) {

    e.preventDefault();

    if (!validateForm()) return;

    setShowConfirmModal(true);

  }

  async function handleSubmitConcern() {

    try {

      const referenceNumber =
        await createConcern(formData);

      setGeneratedReference(
        referenceNumber
      );

      setShowConfirmModal(false);

      setShowSuccessModal(true);

      setFormData({

        fullName: "",
        studentNumber: "",
        email: "",
        course: "",
        yearLevel: "",

        category: "",
        subject: "",
        concern: "",

        incidentDate: "",
        incidentTime: "",

        supportingEvidence: "",

        otherContactType: "None",
        otherContact: "",

        disclosurePreference: "Anonymous",

        dataPrivacyConsent: false,
        goodFaithDeclaration: false,

      });

    }

    catch (error) {

      console.error(error);

      toast.error(
        "Failed to submit concern."
      );

    }

  }

  return (

    <>
  <Navbar />

  <div className="bg-gray-50 min-h-screen py-14">

    <div className="max-w-5xl mx-auto px-5">

      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">

        <h1 className="text-4xl font-bold text-gray-900">
          Submit a Concern
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          The Local Student Council is committed to handling all student
          concerns fairly, professionally, and confidentially. Please
          complete the form below. Fields marked with
          <span className="font-semibold text-red-600"> *</span>
          are required.
        </p>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <h2 className="font-semibold text-blue-900 text-lg">
            Confidentiality Notice
          </h2>

          <p className="mt-3 text-blue-800 leading-7">
            If you choose
            <strong> Anonymous</strong>,
            your identity will only be visible to authorized members of the
            Local Student Council and will not be disclosed when your concern
            is forwarded to the appropriate office.
          </p>

        </div>

        <form
          onSubmit={handleOpenConfirmation}
          className="mt-10 space-y-10"
        >

          {/* =======================================================
              STUDENT INFORMATION
          ======================================================= */}

          <section className="bg-white border rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Student Information
            </h2>

            <p className="text-gray-500 mt-2">
              Please provide your basic student information.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div>

                <label className="font-medium">
                  Full Name
                  <span className="text-red-600">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-xl mt-2 p-3"
                />

              </div>

              <div>

                <label className="font-medium">
                  Student Number
                  <span className="text-red-600">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleChange}
                  className="w-full border rounded-xl mt-2 p-3"
                />

              </div>

              <div>

                <label className="font-medium">
                  Email Address
                  <span className="text-red-600">
                    *
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl mt-2 p-3"
                />

              </div>

              <div>

                <label className="font-medium">
                  Course
                  <span className="text-red-600">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Example: BSIT"
                  className="w-full border rounded-xl mt-2 p-3"
                />

              </div>

              <div>

                <label className="font-medium">
                  Year Level
                  <span className="text-red-600">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="yearLevel"
                  value={formData.yearLevel}
                  onChange={handleChange}
                  placeholder="Example: 3rd Year"
                  className="w-full border rounded-xl mt-2 p-3"
                />

              </div>

            </div>

          </section>

                    {/* =======================================================
              CONCERN DETAILS
          ======================================================= */}

          <section className="bg-white border rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Concern Details
            </h2>

            <p className="text-gray-500 mt-2">
              Tell us about your concern. Please provide accurate and complete information.
            </p>

            <div className="mt-8 space-y-6">

              <div>

                <label className="font-medium">
                  Category
                  <span className="text-red-600">*</span>
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-xl mt-2 p-3"
                >
                  <option value="">
                    Select Category
                  </option>

                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}

                </select>

              </div>

              <div>

                <label className="font-medium">
                  Subject
                  <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter a short subject"
                  className="w-full border rounded-xl mt-2 p-3"
                />

              </div>

              <div>

                <label className="font-medium">
                  Concern Details
                  <span className="text-red-600">*</span>
                </label>

                <textarea
                  rows="7"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  placeholder="Please explain your concern in detail."
                  className="w-full border rounded-xl mt-2 p-3 resize-none"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="font-medium">
                    Date of Incident
                    <span className="text-gray-400 text-sm ml-2">
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="date"
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleChange}
                    className="w-full border rounded-xl mt-2 p-3"
                  />

                </div>

                <div>

                  <label className="font-medium">
                    Approximate Time
                    <span className="text-gray-400 text-sm ml-2">
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="time"
                    name="incidentTime"
                    value={formData.incidentTime}
                    onChange={handleChange}
                    className="w-full border rounded-xl mt-2 p-3"
                  />

                </div>

              </div>

              <div>

                <label className="font-medium">
                  Supporting Evidence
                  <span className="text-gray-400 text-sm ml-2">
                    (Optional)
                  </span>
                </label>

                <input
                  type="url"
                  name="supportingEvidence"
                  value={formData.supportingEvidence}
                  onChange={handleChange}
                  placeholder="Google Drive link or other accessible link"
                  className="w-full border rounded-xl mt-2 p-3"
                />

                <p className="text-sm text-gray-500 mt-2">
                  Upload your file to Google Drive (or another cloud service),
                  set the sharing permission appropriately, and paste the link here.
                </p>

              </div>

            </div>

          </section>

                    {/* =======================================================
              CONTACT INFORMATION
          ======================================================= */}

          <section className="bg-white border rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Contact Information
            </h2>

            <p className="text-gray-500 mt-2">
              Your email address will be used to send updates regarding your concern.
            </p>

            <div className="mt-8 space-y-6">

              <div>

                <label className="font-medium">
                  Other Contact Method
                </label>

                <select
                  name="otherContactType"
                  value={formData.otherContactType}
                  onChange={handleChange}
                  className="w-full border rounded-xl mt-2 p-3"
                >
                  <option>None</option>
                  <option>Facebook Messenger</option>
                  <option>Mobile Number</option>
                </select>

              </div>

              {formData.otherContactType !== "None" && (

                <div>

                  <label className="font-medium">

                    {formData.otherContactType ===
                    "Facebook Messenger"
                      ? "Facebook Profile Link / Name"
                      : "Mobile Number"}

                    <span className="text-red-600">
                      *
                    </span>

                  </label>

                  <input
                    type="text"
                    name="otherContact"
                    value={formData.otherContact}
                    onChange={handleChange}
                    className="w-full border rounded-xl mt-2 p-3"
                  />

                </div>

              )}

            </div>

          </section>

          {/* =======================================================
              PRIVACY PREFERENCE
          ======================================================= */}

          <section className="bg-white border rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Privacy Preference
            </h2>

            <p className="text-gray-500 mt-2">
              Choose how your identity should be handled when your concern
              is forwarded to the appropriate office.
            </p>

            <div className="space-y-5 mt-8">

              <label className="flex gap-4 items-start">

                <input
                  type="radio"
                  name="disclosurePreference"
                  value="Full Disclosure"
                  checked={
                    formData.disclosurePreference ===
                    "Full Disclosure"
                  }
                  onChange={handleChange}
                  className="mt-1"
                />

                <div>

                  <p className="font-semibold">
                    Full Disclosure
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    The Local Student Council may disclose your identity
                    when forwarding your concern.
                  </p>

                </div>

              </label>

              <label className="flex gap-4 items-start">

                <input
                  type="radio"
                  name="disclosurePreference"
                  value="Anonymous"
                  checked={
                    formData.disclosurePreference ===
                    "Anonymous"
                  }
                  onChange={handleChange}
                  className="mt-1"
                />

                <div>

                  <p className="font-semibold">
                    Anonymous
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Only authorized members of the Local Student Council
                    can see your identity. Your name will not be disclosed
                    when your concern is forwarded.
                  </p>

                </div>

              </label>

            </div>

          </section>

          {/* =======================================================
              AGREEMENTS
          ======================================================= */}

          <section className="bg-white border rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Agreements
            </h2>

            <div className="space-y-6 mt-8">

              <label className="flex items-start gap-4">

                <input
                  type="checkbox"
                  name="dataPrivacyConsent"
                  checked={formData.dataPrivacyConsent}
                  onChange={handleChange}
                  className="mt-1"
                />

                <p className="text-gray-700 leading-7">
                  I consent to the collection, processing, and storage of my
                  personal information for the purpose of addressing this
                  concern in accordance with applicable data privacy laws.
                </p>

              </label>

              <label className="flex items-start gap-4">

                <input
                  type="checkbox"
                  name="goodFaithDeclaration"
                  checked={formData.goodFaithDeclaration}
                  onChange={handleChange}
                  className="mt-1"
                />

                <p className="text-gray-700 leading-7">
                  I declare that the information I have provided is true and
                  submitted in good faith to the best of my knowledge.
                </p>

              </label>

            </div>

          </section>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">

  <h3 className="font-semibold text-amber-900">
    Response Time
  </h3>

  <p className="mt-2 text-amber-800 leading-7">
    The Local Student Council aims to review submitted concerns within
    <strong> 1–3 working days.</strong>
    Concerns that require coordination with other university offices may
    take additional time. Updates regarding your concern will be sent to
    your registered email address.
  </p>

</div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Submit Concern
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>

        {/* ===========================================
          RESPONSE TIME NOTICE
      =========================================== */}

      <div className="fixed inset-0 pointer-events-none hidden"></div>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5">

          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8">

            <h2 className="text-2xl font-bold">
              Submit Concern?
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Please review all the information you have entered before
              submitting your concern.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Once submitted, your concern will be received by the Local
              Student Council for review.
            </p>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() =>
                  setShowConfirmModal(false)
                }
                className="border px-5 py-3 rounded-xl"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmitConcern}
                className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl"
              >
                Submit
              </button>

            </div>

          </div>

        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5">

          <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl p-10 text-center">

            <div className="text-6xl mb-5">
              ✅
            </div>

            <h2 className="text-3xl font-bold">
              Concern Submitted Successfully
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Thank you for contacting the Local Student Council.
              Your concern has been received successfully.
            </p>

            <div className="bg-gray-100 rounded-2xl mt-8 p-6">

              <p className="text-sm text-gray-500">
                Reference Number
              </p>

              <h3 className="text-3xl font-bold mt-2 tracking-wider">
                {generatedReference}
              </h3>

            </div>

            <p className="mt-6 text-gray-600 leading-7">
              Please save this reference number for future inquiries.
            </p>

            <p className="mt-3 text-gray-600 leading-7">
              Updates regarding your concern will be sent to your
              registered email address.
            </p>

            <button
              onClick={() =>
                setShowSuccessModal(false)
              }
              className="mt-8 bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-xl"
            >
              Done
            </button>

          </div>

        </div>
      )}
</>

  );

}

export default Concern;
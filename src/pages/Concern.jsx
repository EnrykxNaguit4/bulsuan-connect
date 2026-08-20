import { useState } from "react";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import PublicLayout from "../components/layout/PublicLayout";

import { createConcern } from "../features/concerns/concernService";

function Concern() {

  const natureOfConcerns = [
    "Academic Concerns",
    "Enrollment Procedures",
    "Faculty and Staff Conduct",
    "Bullying, Harassment, and Intimidation",
    "Discrimination and Inequality",
    "Student Organization Concerns",
    "Facilities, Safety, and Campus Services",
    "Other Concerns",
  ];

  const programs = [
    "Bachelor of Arts in Development Studies",
    "Bachelor of Public Administration",
    "Bachelor of Science in Psychology",
    "Bachelor of Science in Social Work",
  ];

  const yearLevels = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
  ];

  const sections = [
    "A",
    "B",
    "C",
    "D",
    "E",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    studentNumber: "",
    email: "",
    program: "",
    yearLevel: "",
    section: "",

    natureOfConcern: "",
    subject: "",
    concern: "",

    incidentDate: "",
    incidentTime: "",

    supportingEvidence: "",

    otherContactType: "None",
    otherContact: "",

    disclosurePreference: "Confidential",

    consentAcknowledgement: false,
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

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

  }

  function validateForm() {

    if (
      !formData.fullName ||
      !formData.studentNumber ||
      !formData.email ||
      !formData.program ||
      !formData.yearLevel ||
      !formData.section ||
      !formData.natureOfConcern ||
      !formData.subject ||
      !formData.concern ||
      !formData.incidentDate ||
      !formData.incidentTime
    ) {

      toast.error(
        "Please complete all required fields."
      );

      return false;

    }

   if (!formData.consentAcknowledgement) {
  toast.error(
    "Please agree to the consent and acknowledgement before submitting."
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
        program: "",
        yearLevel: "",
        section: "",

        natureOfConcern: "",
        subject: "",
        concern: "",

        incidentDate: "",
        incidentTime: "",

        supportingEvidence: "",

        otherContactType: "None",
        otherContact: "",

        disclosurePreference: "Confidential",

        consentAcknowledgement: false,

      });

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to submit concern."
      );

    }

  }

  return (
    <PublicLayout>

      {/* ==========================================================
          PAGE HEADER
      ========================================================== */}

      <section className="bg-[#5E1017] text-white">

        <div className="max-w-7xl mx-auto px-6 py-10 md:py-8 min-h-[180px] md:min-h-[190px] flex flex-col justify-center">

          <h1 className="text-3xl md:text-4xl font-bold">
            Submit a Concern
          </h1>

          <p className="mt-4 max-w-2xl text-[#FAEAEA] text-base md:text-lg leading-7 md:leading-8">
           We want to hear what matters to you and help address concerns that affect your student experience.
          </p>

        </div>

      </section>

      <div className="bg-[#FAEAEA] min-h-screen pt-6 pb-10 md:pt-8 md:pb-12">

        <div className="max-w-5xl mx-auto px-5">

          <div className="bg-white rounded-3xl shadow-sm px-5 pt-1 pb-5 sm:px-6 sm:pt-2 sm:pb-6 md:px-12 md:pt-1 md:pb-12">

            {/* ======================================================
                CONFIDENTIALITY NOTICE
            ====================================================== */}

            <div className="mt-3 md:mt-6 rounded-2xl border border-[#9A1C27]/30 bg-[#FAEAEA]/35 p-5 md:p-6">

              <h2 className="font-semibold text-[#5E1017] text-lg">
                Data Privacy Notice
              </h2>

              <p className="mt-3 text-[#5E1017] leading-7">
                Your privacy matters to us. Any personal information you share 
                through this form will be used only by the CSSP LSC to understand 
                and properly address your grievances, requests for assistance, 
                concerns, and other student-related matters. In accordance with 
                the <strong>Data Privacy Act of 2012 (RA 10173)</strong>, your information will 
                be kept secure and accessed only by authorized individuals when 
                necessary to assist you. Once your concern has been resolved 
                and your information is no longer needed, the corresponding 
                records will be securely deleted or disposed of, unless 
                retention is required by law.
              </p>

            </div>

            <form
              onSubmit={handleOpenConfirmation}
              className="mt-5 md:mt-6 space-y-10 text-sm md:text-base"
            >

                            {/* =====================================================
                  STUDENT INFORMATION
              ===================================================== */}

              <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8">

                <h2 className="text-xl md:text-2xl font-bold text-[#5E1017]">
                  Student Information
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Please provide your basic student information.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-6 md:mt-8">

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Full Name
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dela Cruz, Juan S."
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Student Number
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      name="studentNumber"
                      value={formData.studentNumber}
                      onChange={handleChange}
                      placeholder="e.g. 2026123456"
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Email Address
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. example@gmail.com"
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Program
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    >

                      <option value="">
                        Select Program
                      </option>

                      {programs.map((program) => (

                        <option
                          key={program}
                          value={program}
                        >
                          {program}
                        </option>

                      ))}

                    </select>

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Year Level
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <select
                      name="yearLevel"
                      value={formData.yearLevel}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    >

                      <option value="">
                        Select Year Level
                      </option>

                      {yearLevels.map((yearLevel) => (

                        <option
                          key={yearLevel}
                          value={yearLevel}
                        >
                          {yearLevel}
                        </option>

                      ))}

                    </select>

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Section
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <select
                      name="section"
                      value={formData.section}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    >

                      <option value="">
                        Select Section
                      </option>

                      {sections.map((section) => (

                        <option
                          key={section}
                          value={section}
                        >
                          {section}
                        </option>

                      ))}

                    </select>

                  </div>

                </div>

              </section>

              {/* =====================================================
                  CONCERN DETAILS
              ===================================================== */}

              <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8">

                <h2 className="text-xl md:text-2xl font-bold text-[#5E1017]">
                  Concern Details
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Tell us about your concern. Please provide accurate and complete information.
                </p>

                <div className="mt-6 md:mt-8 space-y-5 md:space-y-6">

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Nature of Concern
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <select
                      name="natureOfConcern"
                      value={formData.natureOfConcern}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    >

                      <option value="">
                        Select Nature of Concern
                      </option>

                      {natureOfConcerns.map((nature) => (

                        <option
                          key={nature}
                          value={nature}
                        >
                          {nature}
                        </option>

                      ))}

                    </select>

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Subject
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Non-Consulted Release of Grades"
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Concern Details
                      <span className="text-[#9A1C27]">
                        *
                      </span>
                    </label>

                    <textarea
                      rows={5}
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      placeholder="State here what happened."
                      required
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 p-3 resize-none outline-none"
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>

                      <label className="text-sm md:text-base font-medium">
                        Date of Incident
                        <span className="text-[#9A1C27]">
                          *
                        </span>
                      </label>

                      <div className="w-5/6 md:w-full">

                        <input
                          type="date"
                          name="incidentDate"
                          value={formData.incidentDate}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                        />

                      </div>

                    </div>

                    <div>

                      <label className="text-sm md:text-base font-medium">
                        Approximate Time
                        <span className="text-[#9A1C27]">
                          *
                        </span>
                      </label>

                      <div className="w-5/6 md:w-full">

                        <input
                          type="time"
                          name="incidentTime"
                          value={formData.incidentTime}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                        />

                      </div>

                    </div>

                  </div>

                  <div>

                    <label className="text-sm md:text-base font-medium">
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
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    />

                    <p className="text-sm text-gray-500 mt-2">
                      Upload your file to Google Drive (or another cloud service),
                      set the sharing permission appropriately, and paste the link here.
                    </p>

                  </div>

                </div>

              </section>

                    {/* =====================================================
    CONFIRMATION MODAL
===================================================== */}

{showConfirmModal && (

  <div
    className="
      fixed
      inset-0
      z-[9999]
      w-screen
      h-screen
      min-h-screen
      bg-black/60
      flex
      items-center
      justify-center
      px-4
      py-6
      overflow-y-auto
    "
  >

    <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl">

      <div className="p-6 md:p-8">

        <h2 className="text-xl md:text-2xl font-bold text-[#5E1017]">
          Confirm Submission
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          Please review your information before submitting your
          concern. Once submitted, your concern will be recorded
          and forwarded to the appropriate office when necessary.
        </p>

        <div className="mt-5 rounded-xl bg-[#FAEAEA] border border-[#9A1C27]/20 p-4">

          <p className="text-sm text-gray-700 leading-6">
            <strong className="text-[#5E1017]">
              Confidentiality Preference:
            </strong>{" "}
            {formData.disclosurePreference}
          </p>

          <p className="mt-2 text-sm text-gray-700 leading-6">
            <strong className="text-[#5E1017]">
              Nature of Concern:
            </strong>{" "}
            {formData.natureOfConcern}
          </p>

          <p className="mt-2 text-sm text-gray-700 leading-6">
            <strong className="text-[#5E1017]">
              Subject:
            </strong>{" "}
            {formData.subject}
          </p>

        </div>

        <p className="mt-5 text-sm text-gray-500 leading-6">
          Are you sure you want to submit this concern?
        </p>

      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 border-t border-gray-100 p-5 md:px-8 md:py-5">

        <button
          type="button"
          onClick={() => setShowConfirmModal(false)}
          className="
            w-full
            sm:w-auto
            rounded-xl
            border
            border-gray-300
            px-6
            py-3
            font-semibold
            text-gray-700
            hover:bg-gray-50
            transition
          "
        >
          Go Back
        </button>

        <button
          type="button"
          onClick={handleSubmitConcern}
          className="
            w-full
            sm:w-auto
            rounded-xl
            bg-[#5E1017]
            px-6
            py-3
            font-semibold
            text-white
            hover:bg-[#9A1C27]
            transition
          "
        >
          Confirm Submission
        </button>

      </div>

    </div>

  </div>

)}

              {/* =====================================================
                  SUCCESS MODAL
              ===================================================== */}

              {showSuccessModal && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                  <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">

                    <div className="p-6 md:p-8 text-center">

                      <div className="flex justify-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAEAEA]">

                          <CheckCircleIcon
                            className="h-10 w-10 text-[#9A1C27]"
                          />

                        </div>

                      </div>

                      <h2 className="mt-5 text-xl md:text-2xl font-bold text-[#5E1017]">
                        Concern Submitted Successfully
                      </h2>

                      <p className="mt-4 text-gray-600 leading-7">
                        Your concern has been successfully submitted to the
                        Local Student Council.
                      </p>

                      <div className="mt-5 rounded-xl bg-[#FAEAEA] border border-[#9A1C27]/20 p-5">

                        <p className="text-sm text-gray-600">
                          Your reference number is:
                        </p>

                        <p className="mt-2 text-xl md:text-2xl font-bold tracking-wide text-[#9A1C27]">
                          {generatedReference}
                        </p>

                      </div>

                      <p className="mt-5 text-sm text-gray-500 leading-6">
                        Please keep your reference number for future tracking
                        or follow-up regarding your concern.
                      </p>

                    </div>

                    <div className="border-t border-gray-100 p-5 md:px-8 md:py-5">

                      <button
                        type="button"
                        onClick={() => setShowSuccessModal(false)}
                        className="w-full rounded-xl bg-[#5E1017] px-6 py-3 font-semibold text-white hover:bg-[#9A1C27] transition"
                      >
                        Close
                      </button>

                    </div>

                  </div>

                </div>

              )}

                            {/* =====================================================
                  CONTACT INFORMATION
              ===================================================== */}

              <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8">

                <h2 className="text-xl md:text-2xl font-bold text-[#5E1017]">
                  Contact Information
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Your email address will be used to send updates regarding your concern.
                </p>

                <div className="mt-6 md:mt-8 space-y-5 md:space-y-6">

                  <div>

                    <label className="text-sm md:text-base font-medium">
                      Other Contact Method
                    </label>

                    <select
                      name="otherContactType"
                      value={formData.otherContactType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                    >

                      <option value="None">
                        None
                      </option>

                      <option value="Facebook Messenger">
                        Facebook Messenger
                      </option>

                      <option value="Mobile Number">
                        Mobile Number
                      </option>

                    </select>

                  </div>

                  {formData.otherContactType !== "None" && (

                    <div>

                      <label className="text-sm md:text-base font-medium">

                        {formData.otherContactType ===
                        "Facebook Messenger"
                          ? "Facebook Profile Link / Name"
                          : "Mobile Number"}

                        <span className="text-[#9A1C27]">
                          *
                        </span>

                      </label>

                      <input
                        type="text"
                        name="otherContact"
                        value={formData.otherContact}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] rounded-xl mt-2 px-3 py-2.5 md:p-3 outline-none"
                      />

                    </div>

                  )}

                </div>

              </section>

              {/* =====================================================
                  CONFIDENTIALITY PREFERENCE
              ===================================================== */}

              <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8">

                <h2 className="text-xl md:text-2xl font-bold text-[#5E1017]">
                  Confidentiality Preference
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Choose how your identity should be handled when your concern
                  is forwarded to the appropriate office.
                </p>

                <div className="space-y-5 mt-8">

                  <label className="flex gap-4 items-start cursor-pointer">

                    <input
                      type="radio"
                      name="disclosurePreference"
                      value="Full Disclosure"
                      checked={
                        formData.disclosurePreference ===
                        "Full Disclosure"
                      }
                      onChange={handleChange}
                      className="mt-1 accent-[#9A1C27]"
                    />

                    <div>

                      <p className="font-semibold text-[#5E1017]">
                        Full Disclosure
                      </p>

                      <p className="text-gray-500 text-sm mt-1 leading-6">
                        Your identity may be disclosed to the appropriate
                        office or people handling your concern.
                      </p>

                    </div>

                  </label>

                  <label className="flex gap-4 items-start cursor-pointer">

                    <input
                      type="radio"
                      name="disclosurePreference"
                      value="Confidential"
                      checked={
                        formData.disclosurePreference ===
                        "Confidential"
                      }
                      onChange={handleChange}
                      className="mt-1 accent-[#9A1C27]"
                    />

                    <div>

                      <p className="font-semibold text-[#5E1017]">
                        Confidential
                      </p>

                      <p className="text-gray-500 text-sm mt-1 leading-6">
                        Your identity will be kept confidential and will only
                        be accessible to authorized members of the Local
                        Student Council. Your identity will not be disclosed
                        when your concern is forwarded, except when disclosure
                        is required or necessary for the proper resolution
                        of the concern.
                      </p>

                    </div>

                  </label>

                </div>

              </section>

                            {/* =====================================================
                  CONSENT AND ACKNOWLEDGEMENT
              ===================================================== */}

              <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8">

  <h2 className="text-xl md:text-2xl font-bold text-[#5E1017]">
    Consent and Acknowledgement
  </h2>

  <div className="mt-8">

    <label className="flex items-start gap-4 cursor-pointer">

      <input
        type="checkbox"
        name="consentAcknowledgement"
        checked={formData.consentAcknowledgement}
        onChange={handleChange}
        className="mt-1 accent-[#9A1C27]"
      />

      <p className="text-gray-700 leading-7">
        I consent to the collection, processing, and storing of my personal
        information for the purpose of addressing this concern in accordance
        with applicable data privacy laws, including the Data Privacy Act of
        2012. I also affirm that the information I have provided is true and
        accurate to the best of my knowledge and is submitted in good faith.
      </p>

    </label>

  </div>

</section>  

              {/* =====================================================
                  RESPONSE AND FOLLOW-UP
              ===================================================== */}

              <div className="bg-[#FAEAEA]/35 border border-[#9A1C27]/30 rounded-2xl p-5 md:p-6">

                <h3 className="font-semibold text-[#5E1017]">
                  Response and Follow-Up
                </h3>

                <p className="mt-2 text-gray-700 leading-7">
                  The CSSP LSC aims to acknowledge and review your concern
                  within
                  <strong className="text-[#5E1017]">
                    {" "}12-24 hours
                  </strong>
                  {" "}of submission. An update regarding the status or
                  appropriate next steps will be sent to your provided
                  email address.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  When a concern requires coordination or referral to another
                  university office, the Council will assist in facilitating
                  the referral and monitor its progress. You will continue to
                  receive relevant updates regarding your concern.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  We are committed to ensuring that every concern is heard,
                  properly referred, and appropriately addressed.
                </p>

              </div>

              {/* =====================================================
                  SUBMIT BUTTON
              ===================================================== */}

              <div className="flex justify-center md:justify-end">

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#5E1017] hover:bg-[#9A1C27] text-white px-8 py-3 rounded-xl font-semibold transition shadow-sm"
                >
                  Submit Concern
                </button>

              </div>

                          </form>

          </div>

        </div>

      </div>

    </PublicLayout>

  );

}

export default Concern;
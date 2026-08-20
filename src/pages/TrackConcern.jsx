import { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

import PublicLayout from "../components/layout/PublicLayout";

import { trackConcern } from "../features/concerns/concernService";
import TrackConcernResult from "../features/concerns/TrackConcernResult";

function TrackConcern() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [studentNumber, setStudentNumber] = useState("");

  const [loading, setLoading] = useState(false);

  const [searched, setSearched] = useState(false);

  const [result, setResult] = useState(null);

async function handleTrack() {
  const formattedReference =
    referenceNumber.trim().toUpperCase();

  const formattedStudentNumber =
    studentNumber.trim();

  if (!formattedReference) {
    toast.error("Please enter your reference number.");
    return;
  }

  if (!formattedStudentNumber) {
    toast.error("Please enter your student number.");
    return;
  }

  // Validate CSSP-LSC-YYYY-####
  const referencePattern =
    /^CSSP-LSC-\d{4}-\d{4}$/;

  if (!referencePattern.test(formattedReference)) {
    toast.error(
      "Please enter a valid reference number (e.g. CSSP-LSC-2026-0001)."
    );
    return;
  }

  try {
    setLoading(true);

    const concern = await trackConcern(
      formattedReference,
      formattedStudentNumber
    );

    if (!concern) {
      toast.error(
        "No concern was found. Please check your reference number and student number."
      );
      return;
    }

    setResult(concern);
    setSearched(true);

    toast.success("Concern found!");

  } catch (error) {
    console.error(error);

    toast.error(
      "Something went wrong while searching."
    );

  } finally {
    setLoading(false);
  }
}

  function handleTrackAnother() {
    setReferenceNumber("");
    setStudentNumber("");

    setResult(null);

    setSearched(false);
  }

  return (
    <PublicLayout>
      <section className="bg-[#5E1017] text-white">
  <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 min-h-[180px] md:min-h-[190px] flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-bold">
      Track Your Concern
    </h1>

    <p className="mt-4 max-w-2xl text-red-200 text-base md:text-lg leading-7 md:leading-8">
      Enter your reference and student number to check the latest progress of your submitted concern.
    </p>
  </div>
</section>

      <section className="max-w-3xl mx-auto py-12 px-4">

        {!searched ? (

          <div className="bg-white rounded-3xl shadow-lg border p-10">

            <div className="text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#9A1C27]/60 text-[#9A1C27] mx-auto text-4xl">
                <FaSearch aria-hidden="true" />
              </div> 
            </div>

            <div className="mt-10 space-y-6">

              <div>

                <label className="block font-medium mb-2">
                  Reference Number
                </label>

                <input
                  type="text"
                  value={referenceNumber}
                  placeholder="e.g. CSSP-LSC-2026-0001"
                  onChange={(e) =>
                    setReferenceNumber(
                      e.target.value.toUpperCase()
                    )
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] outline-none"
                />

              </div>

              <div>

                <label className="block font-medium mb-2">
                  Student Number
                </label>

                <input
                  type="text"
                  value={studentNumber}
                  placeholder="e.g. 2026123456"
                  onChange={(e) =>
                    setStudentNumber(e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 focus:border-[#9A1C27] focus:ring-2 focus:ring-[#FAEAEA] outline-none"
                />

              </div>

              <button
                onClick={handleTrack}
                disabled={loading}
                className="w-full bg-[#9A1C27] hover:bg-[#5E1017] disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
              >
                {loading
                  ? "Searching..."
                  : "Track Concern"}
              </button>

            </div>

          </div>

        ) : (

          <TrackConcernResult
            concern={result}
            onTrackAnother={handleTrackAnother}
          />

        )}

      </section>
    </PublicLayout>
  );
}

export default TrackConcern;
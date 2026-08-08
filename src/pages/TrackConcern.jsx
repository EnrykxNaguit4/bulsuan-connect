import { useState } from "react";
import toast from "react-hot-toast";

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
    if (!referenceNumber.trim()) {
      toast.error("Please enter your reference number.");
      return;
    }

    if (!studentNumber.trim()) {
      toast.error("Please enter your student number.");
      return;
    }

    try {
      setLoading(true);

      const concern = await trackConcern(
        referenceNumber.trim().toUpperCase(),
        studentNumber.trim()
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
      <section className="max-w-3xl mx-auto py-20 px-4">

        {!searched ? (

          <div className="bg-white rounded-3xl shadow-lg border p-10">

            <div className="text-center">

              <div className="text-5xl">
                🔍
              </div>

              <h1 className="text-4xl font-bold mt-5">
                Track Your Concern
              </h1>

              <p className="text-gray-500 mt-4 leading-7">
                Enter your reference number and student number
                to check the latest progress of your submitted
                concern.
              </p>

            </div>

            <div className="mt-10 space-y-6">

              <div>

                <label className="block font-medium mb-2">
                  Reference Number
                </label>

                <input
                  type="text"
                  value={referenceNumber}
                  placeholder="e.g. LSC-2026-0001"
                  onChange={(e) =>
                    setReferenceNumber(
                      e.target.value.toUpperCase()
                    )
                  }
                  className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
                />

              </div>

              <div>

                <label className="block font-medium mb-2">
                  Student Number
                </label>

                <input
                  type="text"
                  value={studentNumber}
                  placeholder="e.g. 2023-12345"
                  onChange={(e) =>
                    setStudentNumber(e.target.value)
                  }
                  className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
                />

              </div>

              <button
                onClick={handleTrack}
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
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
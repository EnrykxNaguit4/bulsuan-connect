import { useEffect, useMemo, useState } from "react";
import PublicLayout from "../components/layout/PublicLayout";
import { FaSearch, FaEye, FaDownload } from "react-icons/fa";

import { getFiles } from "../features/files/fileService";

import {
  getGoogleDrivePreview,
  getGoogleDriveDownload,
} from "../utils/googleDrive";

function Files() {
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function loadFiles() {
      const data = await getFiles();
      setFiles(data);
    }

    loadFiles();
  }, []);

  const filteredFiles = useMemo(() => {
    return files.filter((file) => {
      const matchesSearch =
        file.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        file.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        file.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [files, search, category]);

  return (
    <PublicLayout>

     <section className="bg-[#5E1017] text-white">
  <div className="max-w-7xl mx-auto px-6 py-10 md:py-8 min-h-[180px] md:min-h-[190px] flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-bold">
      Files
    </h1>

    <p className="mt-4 max-w-2xl text-red-200 text-base md:text-lg leading-7 md:leading-8">
     Access the official documents of student guidelines and policies that will empower you as a BulSUan.
    </p>
  </div>
</section>

      <section className="max-w-7xl mx-auto py-8 px-4">

        <div className="grid md:grid-cols-2 gap-5 mb-10">

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search files..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-gray-400 bg-white p-3 pl-11 focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border rounded-xl p-3"
          >
            <option>All</option>
            <option>Forms</option>
            <option>Handbook</option>
            <option>Memorandum</option>
            <option>Policies</option>
            <option>Guidelines</option>
            <option>Others</option>
          </select>

        </div>

        {filteredFiles.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

            <h2 className="text-2xl font-semibold">
              No files found.
            </h2>

            <p className="text-gray-500 mt-3">
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {filteredFiles.map((file) => (

              <div
                key={file.id}
                className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
              >

                <p className="text-sm text-red-700 font-semibold">
                  {file.category}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {file.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {file.description}
                </p>

                <div className="flex gap-4 mt-6">

                  <a
  href={getGoogleDrivePreview(file.url)}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#9A1C27]/80 hover:bg-[#5E1017]/80 text-white px-5 py-2 rounded-xl transition inline-flex items-center gap-2"
>
  <FaEye aria-hidden="true" />
  Preview
</a>

                  <a
  href={getGoogleDriveDownload(file.url)}
  className="bg-[#9A1C27] hover:bg-[#5E1017] text-white px-5 py-2 rounded-xl transition inline-flex items-center gap-2"
>
  <FaDownload aria-hidden="true" />
  Download
</a>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </PublicLayout>
  );
}

export default Files;
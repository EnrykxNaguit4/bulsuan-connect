import { useEffect, useMemo, useState } from "react";
import PublicLayout from "../components/layout/PublicLayout";

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

      <section className="max-w-7xl mx-auto py-16 px-4">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Files
          </h1>

          <p className="text-gray-500 mt-3">
            Download official files and documents released by the Local Student Council.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">

          <input
            type="text"
            placeholder="Search files..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-xl p-3"
          />

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
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >

                <p className="text-sm text-green-700 font-semibold">
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
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
>
  👁 Preview
</a>

                  <a
  href={getGoogleDriveDownload(file.url)}
  className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl transition"
>
  ⬇ Download
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
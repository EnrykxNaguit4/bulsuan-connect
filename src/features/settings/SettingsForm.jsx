import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getWebsiteSettings,
  updateWebsiteSettings,
} from "./websiteSettingsService";

import CollapsibleSection from "./CollapsibleSection";

import {
  AcademicCapIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  InformationCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function SettingsForm() {
  const [loading, setLoading] = useState(true);

const [formData, setFormData] = useState({
  organizationName: "",
  universityName: "",
  campusName: "",

  contactEmail: "",
  contactPhone: "",
  facebookPageName: "",
  facebookPageUrl: "",

  officeName: "",
  officeLocation: "",
  officeHours: "",

  about: "",

  websiteName: "",
  websiteTagline: "",

  lastUpdated: null,
  });

 useEffect(() => {
  loadSettings();
}, []);

async function loadSettings() {
  try {
    const data = await getWebsiteSettings();

    setFormData(data);

  } catch (error) {
    console.error(error);

    toast.error("Failed to load website settings.");

  } finally {
    setLoading(false);
  }
}

 function handleChange(e) {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

  async function handleSubmit(e) {
  e.preventDefault();

  try {

    await updateWebsiteSettings(formData);

    toast.success("Website settings updated successfully!");

    loadSettings();

  } catch (error) {

    console.error(error);

    toast.error("Failed to update website settings.");

  }
}

  if (loading) {
  return (
    <div className="bg-white rounded-2xl border p-10 text-center">
      Loading website settings...
    </div>
  );
}

return (

  <form
    onSubmit={handleSubmit}
    className="space-y-8"
  >

    {/* ===========================================================
        ORGANIZATION
    =========================================================== */}

    <CollapsibleSection
  icon={AcademicCapIcon}
  title="Organization"
  description="Basic information displayed throughout the website."
  defaultOpen={true}
>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block font-medium mb-2">
            Organization Name
          </label>

          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div>

          <label className="block font-medium mb-2">
            University Name
          </label>

          <input
            type="text"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div className="md:col-span-2">

          <label className="block font-medium mb-2">
            Campus Name
          </label>

          <input
            type="text"
            name="campusName"
            value={formData.campusName}
            onChange={handleChange}
            placeholder="Leave blank if this system is used university-wide."
            className="w-full border rounded-xl p-3"
          />

        </div>

      </div>



    </CollapsibleSection>

{/* ===========================================================
    CONTACT INFORMATION
=========================================================== */}

<CollapsibleSection
  icon={PhoneIcon}
  title="Contact Information"
  description="Information students can use to contact the student government."
>

  <div className="grid md:grid-cols-2 gap-6">

    <div>

      <label className="block font-medium mb-2">
        Contact Email
      </label>

      <input
        type="email"
        name="contactEmail"
        value={formData.contactEmail}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

    <div>

      <label className="block font-medium mb-2">
        Contact Phone
      </label>

      <input
        type="text"
        name="contactPhone"
        value={formData.contactPhone}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

    <div>

      <label className="block font-medium mb-2">
        Facebook Page Name
      </label>

      <input
        type="text"
        name="facebookPageName"
        value={formData.facebookPageName}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

    <div>

      <label className="block font-medium mb-2">
        Facebook Page URL
      </label>

      <input
        type="url"
        name="facebookPageUrl"
        value={formData.facebookPageUrl}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

  </div>

</CollapsibleSection>

{/* ===========================================================
    OFFICE INFORMATION
=========================================================== */}

<CollapsibleSection
  icon={BuildingOfficeIcon}
  title="Office Information"
  description="Office location and operating hours."
>

  <div className="grid md:grid-cols-2 gap-6">

    <div>

      <label className="block font-medium mb-2">
        Office Name
      </label>

      <input
        type="text"
        name="officeName"
        value={formData.officeName}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

    <div>

      <label className="block font-medium mb-2">
        Office Location
      </label>

      <input
        type="text"
        name="officeLocation"
        value={formData.officeLocation}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

    <div className="md:col-span-2">

      <label className="block font-medium mb-2">
        Office Hours
      </label>

      <input
        type="text"
        name="officeHours"
        value={formData.officeHours}
        onChange={handleChange}
        placeholder="Monday–Friday • 8:00 AM – 5:00 PM"
        className="w-full border rounded-xl p-3"
      />

    </div>

  </div>

</CollapsibleSection>

{/* ===========================================================
    ABOUT
=========================================================== */}

<CollapsibleSection
  icon={InformationCircleIcon}
  title="About"
  description="Displayed on the Contact page and other public pages."
>

  <div>

    <label className="block font-medium mb-2">
      About Description
    </label>

    <textarea
      name="about"
      value={formData.about}
      onChange={handleChange}
      rows={6}
      className="w-full border rounded-xl p-4 resize-none"
    />

  </div>

</CollapsibleSection>

{/* ===========================================================
    WEBSITE BRANDING
=========================================================== */}

<CollapsibleSection
  icon={GlobeAltIcon}
  title="Website Branding"
  description="Website name and tagline displayed throughout the system."
>

  <div className="grid md:grid-cols-2 gap-6">

    <div>

      <label className="block font-medium mb-2">
        Website Name
      </label>

      <input
        type="text"
        name="websiteName"
        value={formData.websiteName}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

    <div>

      <label className="block font-medium mb-2">
        Website Tagline
      </label>

      <input
        type="text"
        name="websiteTagline"
        value={formData.websiteTagline}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

    </div>

  </div>

</CollapsibleSection>

    {/* SAVE BUTTON */}

    <div className="flex justify-between items-center bg-white border rounded-2xl px-8 py-6">

  <div>

    <p className="text-sm text-gray-500">
      Last Updated
    </p>

    <p className="font-semibold mt-1">
      {formData.lastUpdated
        ? new Date(
            formData.lastUpdated.seconds * 1000
          ).toLocaleString()
        : "Not available"}
    </p>

  </div>

  <button
    type="submit"
    className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition"
  >
    Save Website Settings
  </button>

</div>

  </form>

);
}

export default SettingsForm;
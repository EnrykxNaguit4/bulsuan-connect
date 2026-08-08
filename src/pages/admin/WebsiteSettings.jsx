import AdminLayout from "../../components/admin/Layout/AdminLayout";

import SettingsForm from "../../features/settings/SettingsForm";

function WebsiteSettings() {
  return (
    <AdminLayout>

      <div className="flex justify-between items-start mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Website Settings
          </h1>

          <p className="text-gray-500 mt-3 leading-7 max-w-2xl">
            Configure the information displayed throughout
            BulSUan Connect. Changes made here are
            automatically reflected across the website.
          </p>

        </div>

      </div>

      <SettingsForm />

    </AdminLayout>
  );
}

export default WebsiteSettings;
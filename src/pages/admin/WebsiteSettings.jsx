import AdminLayout from "../../components/admin/Layout/AdminLayout";

import SettingsForm from "../../features/settings/SettingsForm";

function WebsiteSettings() {

  return (

    <AdminLayout
      title="Website Settings"
      description="Configure the information displayed throughout BulSUan Connect. Changes made here are automatically reflected across the website."
    >

      <SettingsForm />

    </AdminLayout>

  );

}

export default WebsiteSettings;
import { useEffect, useState } from "react";

import { getWebsiteSettings } from "../features/settings/websiteSettingsService";

export default function useWebsiteSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadSettings() {
    try {
      const data = await getWebsiteSettings();
      setSettings(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSettings();
  }, []);

  return {
    settings,
    loading,
    refreshSettings: loadSettings,
  };
}
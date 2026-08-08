import {
  createContext,
  useContext,
} from "react";

import useWebsiteSettings from "../hooks/useWebsiteSettings";

const WebsiteSettingsContext =
  createContext();

export function WebsiteSettingsProvider({
  children,
}) {

  const websiteSettings =
    useWebsiteSettings();

  return (

    <WebsiteSettingsContext.Provider
      value={websiteSettings}
    >

      {children}

    </WebsiteSettingsContext.Provider>

  );

}

export function useSettings() {

  return useContext(
    WebsiteSettingsContext
  );

}
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

import { WebsiteSettingsProvider } from "./context/WebsiteSettingsContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <WebsiteSettingsProvider>

      <BrowserRouter>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,

            style: {
              borderRadius: "14px",
              background: "#ffffff",
              color: "#1f2937",
              fontWeight: "500",
            },

            success: {
              iconTheme: {
                primary: "#15803d",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#ffffff",
              },
            },
          }}
        />

        <App />

      </BrowserRouter>

    </WebsiteSettingsProvider>

  </React.StrictMode>
);
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

const settingsRef = doc(
  db,
  "websiteSettings",
  "general"
);

export async function getWebsiteSettings() {
  const snapshot = await getDoc(settingsRef);

  if (!snapshot.exists()) {
    throw new Error("Website settings not found.");
  }

  return snapshot.data();
}

export async function updateWebsiteSettings(data) {
  await updateDoc(settingsRef, {
    ...data,
    lastUpdated: new Date(),
  });
}
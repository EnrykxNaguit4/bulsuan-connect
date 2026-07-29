import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function getAnnouncements() {
  const snapshot = await getDocs(collection(db, "announcements"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getAnnouncementCount() {
  const snapshot = await getDocs(collection(db, "announcements"));
  return snapshot.size;
}
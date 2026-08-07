import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

export async function getAnnouncements(featuredOnly = false) {
  let q;

  if (featuredOnly) {
    q = query(
      collection(db, "announcements"),
      where("featured", "==", true),
      orderBy("createdAt", "desc")
    );
  } else {
    q = query(
      collection(db, "announcements"),
      orderBy("createdAt", "desc")
    );
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
  id: docSnap.id,
  type: "announcement",
  ...docSnap.data(),
}));
}

export async function getAnnouncementCount() {
  const snapshot = await getDocs(collection(db, "announcements"));
  return snapshot.size;
}

export async function createAnnouncement(data) {
  await addDoc(collection(db, "announcements"), data);
}

export async function updateAnnouncement(id, data) {
  await updateDoc(doc(db, "announcements", id), data);
}

export async function deleteAnnouncement(id) {
  await deleteDoc(doc(db, "announcements", id));
}
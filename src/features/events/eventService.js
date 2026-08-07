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

export async function getEvents(featuredOnly = false) {
  let q;

  if (featuredOnly) {
    q = query(
      collection(db, "events"),
      where("featured", "==", true),
      orderBy("createdAt", "desc")
    );
  } else {
    q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc")
    );
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
  id: docSnap.id,
  type: "event",
  ...docSnap.data(),
}));
}

export async function createEvent(data) {
  await addDoc(collection(db, "events"), data);
}

export async function updateEvent(id, data) {
  await updateDoc(doc(db, "events", id), data);
}

export async function deleteEvent(id) {
  await deleteDoc(doc(db, "events", id));
}

export async function getEventCount() {
  const snapshot = await getDocs(collection(db, "events"));
  return snapshot.size;
}
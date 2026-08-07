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

export async function getFiles(featuredOnly = false) {
  let q;

  if (featuredOnly) {
    q = query(
      collection(db, "files"),
      where("featured", "==", true),
      orderBy("createdAt", "desc")
    );
  } else {
    q = query(
      collection(db, "files"),
      orderBy("createdAt", "desc")
    );
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
}

export async function createFile(data) {
  await addDoc(collection(db, "files"), data);
}

export async function updateFile(id, data) {
  await updateDoc(doc(db, "files", id), data);
}

export async function deleteFile(id) {
  await deleteDoc(doc(db, "files", id));
}

export async function getFileCount() {
  const snapshot = await getDocs(collection(db, "files"));
  return snapshot.size;
}
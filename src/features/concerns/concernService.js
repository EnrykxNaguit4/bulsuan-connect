import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  limit,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

/*
|--------------------------------------------------------------------------
| Generate Sequential Reference Number
|--------------------------------------------------------------------------
*/

async function generateReferenceNumber() {
  const currentYear = new Date().getFullYear();

  const q = query(
    collection(db, "concerns"),
    orderBy("referenceNumber", "desc")
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return `LSC-${currentYear}-0001`;
  }

  const latestReference =
    snapshot.docs[0].data().referenceNumber;

  const latestNumber = parseInt(
    latestReference.split("-")[2],
    10
  );

  const nextNumber = latestNumber + 1;

  return `LSC-${currentYear}-${String(nextNumber).padStart(4, "0")}`;
}

/*
|--------------------------------------------------------------------------
| Create Concern
|--------------------------------------------------------------------------
*/

export async function createConcern(data) {
  const referenceNumber =
    await generateReferenceNumber();

  const now = new Date();

  await addDoc(collection(db, "concerns"), {
    ...data,

    referenceNumber,

    status: "Pending",

statusRemarks: "",

updatedBy: "",

createdAt: now,

lastUpdatedAt: now,

resolvedAt: null
  });

  return referenceNumber;
}

/*
|--------------------------------------------------------------------------
| Get All Concerns
|--------------------------------------------------------------------------
*/

export async function getConcerns() {
  const q = query(
    collection(db, "concerns"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
}

/*
|--------------------------------------------------------------------------
| Update Concern
|--------------------------------------------------------------------------
*/

export async function updateConcern(id, data) {
  await updateDoc(
    doc(db, "concerns", id),
    {
      ...data,
      lastUpdatedAt: new Date(),
    }
  );
}

/*
|--------------------------------------------------------------------------
| Delete Concern
|--------------------------------------------------------------------------
*/

export async function deleteConcern(id) {
  await deleteDoc(
    doc(db, "concerns", id)
  );
}

/*
|--------------------------------------------------------------------------
| Dashboard Count
|--------------------------------------------------------------------------
*/

export async function getConcernCount() {
  const snapshot = await getDocs(
    collection(db, "concerns")
  );

  return snapshot.size;
}

/* -------------------------------------------------------------------------- */
/* Track Concern                                                              */
/* -------------------------------------------------------------------------- */

export async function trackConcern(
  referenceNumber,
  studentNumber
) {
  const q = query(
    collection(db, "concerns"),
    where("referenceNumber", "==", referenceNumber),
    where("studentNumber", "==", studentNumber),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  return {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  };
}
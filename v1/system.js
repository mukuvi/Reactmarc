import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

async function performFirestoreOperations() {
  try {
    // Add a new document
    const docRef = await addDoc(collection(db, "students"), {
      firstName: "james",
      lastName: "ngandu",
      age: 24,
    });
    console.log("Document added with ID:", docRef.id);

    // Fetch all documents
    const querySnapshot = await getDocs(collection(db, "students"));
    console.log("Fetched documents:");
    querySnapshot.forEach((doc) =>
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
    );

    // Set (overwrite or create) a specific document
    const setDocRef = doc(db, "students", "MyOn7Cs84VGrIIowTlXH");
    await setDoc(setDocRef, {
      firstName: "james",
      lastName: "mukuvi",
      age: 21,
    });

    // Update an existing document
    await updateDoc(setDocRef, { age: 25 });

    // Delete a document
    await deleteDoc(doc(db, "students", "studentId"));
  } catch (error) {
    console.log("Error performing Firestore operations:", error);
  }
}

performFirestoreOperations();

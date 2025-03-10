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
    // 1. Add a new document
    const docRef = await addDoc(collection(db, "students"), {
      firstName: "james",
      lastName: "ngandu",
      age: 24,
    });
    console.log("Document added with ID:", docRef.id);

    // 2. Fetch all documents
    const querySnapshot = await getDocs(collection(db, "students"));
    console.log("Fetched documents:");
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      console.log(`${doc.id} => ${JSON.stringify(docData)}`);
    });

    // 3. Set (overwrite or create) a specific document
    const setDocRef = doc(db, "students", "MyOn7Cs84VGrIIowTlXH");
    await setDoc(setDocRef, {
      firstName: "james",
      lastName: "mukuvi",
      age: 21,
    });
    console.log("Document set with ID:", setDocRef.id);

    // 4. Update an existing document
    await updateDoc(setDocRef, {
      age: 25,
    });
    console.log("Document updated");

    // 5. Delete a document
    const deleteDocRef = doc(db, "students", "studentId");
    await deleteDoc(deleteDocRef);
    console.log("Document deleted");
  } catch (error) {
    console.error("Error performing Firestore operations:", error);
  }
}

performFirestoreOperations();

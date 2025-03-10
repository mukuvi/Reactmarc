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

async function addDocument() {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      firstName: "james",
      lastName: "ngandu",
      age: 24,
    });
    console.log("Document added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

async function fetchDocuments() {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      console.log(`${doc.id} => ${JSON.stringify(docData)}`);
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

async function setDocument() {
  try {
    const docRef = doc(db, "students", "MyOn7Cs84VGrIIowTlXH");
    await setDoc(docRef, {
      firstName: "james",
      lastName: "mukuvi",
      age: 21,
    });
    console.log("Document set with ID:", docRef.id);
  } catch (error) {
    console.error("Error setting document:", error);
  }
}

async function updateDocument() {
  try {
    const docRef = doc(db, "students", "MyOn7Cs84VGrIIowTlXH");
    await updateDoc(docRef, {
      age: 25,
    });
    console.log("Document updated");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

async function deleteDocument() {
  try {
    const docRef = doc(db, "students", "studentId");
    await deleteDoc(docRef);
    console.log("Document deleted");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

async function performFirestoreOperations() {
  await addDocument();

  await fetchDocuments();

  await setDocument();

  await updateDocument();

  await deleteDocument();
}

performFirestoreOperations();

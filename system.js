import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

async function addAndFetchDocuments() {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      firstName: "mercy",
      lastName: "leitei",
      age: 22,
    });
    console.log("Document written with ID: ", docRef.id);

    const querySnapshot = await getDocs(collection(db, "students"));

    querySnapshot.forEach((doc) => {
      const docData = doc.data();

      console.log(`${doc.id} => ${JSON.stringify(docData)}`);
    });
  } catch (error) {
    console.error("Error adding or fetching documents: ", error);
  }
}

addAndFetchDocuments();

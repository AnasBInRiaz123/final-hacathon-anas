







import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBv6952QSi_acWV5PD_5hQVS5hnHznlwO4",
  authDomain: "final-hacathon.firebaseapp.com",
  databaseURL: "https://final-hacathon-default-rtdb.firebaseio.com",
  projectId: "final-hacathon",
  storageBucket: "final-hacathon.appspot.com",
  messagingSenderId: "800047631356",
  appId: "1:800047631356:web:745f6c07f892221f800079"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

// export { storage };
export default db;
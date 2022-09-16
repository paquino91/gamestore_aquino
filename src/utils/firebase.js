import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmjH2Aj8WCS9jLRjGGPezYxC2K9PgAsxw",
  authDomain: "gamestore-70a04.firebaseapp.com",
  projectId: "gamestore-70a04",
  storageBucket: "gamestore-70a04.appspot.com",
  messagingSenderId: "752218684124",
  appId: "1:752218684124:web:15aca674b4caa0eb3d1219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
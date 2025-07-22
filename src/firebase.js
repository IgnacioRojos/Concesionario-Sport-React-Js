import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ4b5HyEfdtXTVjUFI_yQx-62hvYCgiBo",
  authDomain: "concesionario-sport.firebaseapp.com",
  projectId: "concesionario-sport",
  storageBucket: "concesionario-sport.firebasestorage.app",
  messagingSenderId: "837458259395",
  appId: "1:837458259395:web:8abb8e42cbf91351aca176"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
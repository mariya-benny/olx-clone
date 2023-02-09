import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCApS_ldE9OLOi4Bge1HQP29UfCdN59AZU",
  authDomain: "olx-clone-31eb4.firebaseapp.com",
  projectId: "olx-clone-31eb4",
  storageBucket: "olx-clone-31eb4.appspot.com",
  messagingSenderId: "665802137650",
  appId: "1:665802137650:web:91adbe1a2f7866bc281c2b",
  measurementId: "G-XN19G93M3X",
};

export default firebase.initializeApp(firebaseConfig);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMTTO4L2gJtOE57YEnQnc1BrAX2Msu7gM",
  authDomain: "whatsapp-clone-526b3.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-526b3-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-526b3",
  storageBucket: "whatsapp-clone-526b3.appspot.com",
  messagingSenderId: "502686914588",
  appId: "1:502686914588:web:d44ab24ec8650217c0a7d9",
  measurementId: "G-96XTVPKQB1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

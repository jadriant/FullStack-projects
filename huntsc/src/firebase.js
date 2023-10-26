// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC0st4hltW5nfWR4yuI_sCfVRJonTmbuc",
  authDomain: "huntsc-2d9ab.firebaseapp.com",
  projectId: "huntsc-2d9ab",
  storageBucket: "huntsc-2d9ab.appspot.com",
  messagingSenderId: "875546344201",
  appId: "1:875546344201:web:c898ce822884c7f91cb1d8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
export const db  = getFirestore(app);



/*

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
export const db = getFirestore(app);

*/
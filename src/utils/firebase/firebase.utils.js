import { initializeApp } from "firebase/app";
// Authentication library
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Firestore library
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2De9wOvaXnz34gbqVhRbpK3RoUfVp_I",
  authDomain: "auth-practice-4d035.firebaseapp.com",
  projectId: "auth-practice-4d035",
  storageBucket: "auth-practice-4d035.appspot.com",
  messagingSenderId: "459097679956",
  appId: "1:459097679956:web:bc2fada02c098f0531e5c1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Initialize Firebase authentication
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Firestore database
const db = getFirestore();

// Using Firestore
// Take data from auth service, and store that inside Firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exist
  if (!userSnapshot.exists()) {
    // create/set the document with the data from userAuth in the 'users' collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // if user data exists
  // return userDocRef
  return userDocRef;
};

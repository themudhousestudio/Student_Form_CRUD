// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqs6L8Nby-o94LMuxEv4lyUCCgsIhRwM",
  authDomain: "react-backend-test-ce704.firebaseapp.com",
  databaseURL:
    "https://react-backend-test-ce704-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-backend-test-ce704",
  storageBucket: "react-backend-test-ce704.appspot.com",
  messagingSenderId: "407773291932",
  appId: "1:407773291932:web:cd304c99581b99fca79459",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);

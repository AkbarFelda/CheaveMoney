// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLnxw-rEvVmhwrDUXyX3dF5UU6vNhnoys",
  authDomain: "expensetracker-582ba.firebaseapp.com",
  projectId: "expensetracker-582ba",
  storageBucket: "expensetracker-582ba.firebasestorage.app",
  messagingSenderId: "324794997321",
  appId: "1:324794997321:web:185f976045631c6e9c7d98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//database
export const firestore = getFirestore(app);

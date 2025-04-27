// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBem8tDvwEOI4UM66kZbrAGdIlyxA0QFhY",
  authDomain: "uminho-app.firebaseapp.com",
  projectId: "uminho-app",
  storageBucket: "uminho-app.firebasestorage.app",
  messagingSenderId: "317524841984",
  appId: "1:317524841984:web:d65467f386fc7981c92ae5",
  measurementId: "G-18FW7M2FQG"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let auth;
try {
  auth = getAuth(app);
} catch (error) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };
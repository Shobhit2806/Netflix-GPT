// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNhvqgR0y5uw40mxJagYUTEZ68ycJvRPA",
  authDomain: "netflixgpt-fe0c9.firebaseapp.com",
  projectId: "netflixgpt-fe0c9",
  storageBucket: "netflixgpt-fe0c9.appspot.com",
  messagingSenderId: "987951601221",
  appId: "1:987951601221:web:153c83fb61bc02f113b52c",
  measurementId: "G-9R535Y2VBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKTAuO8r_UbcldbjXVHFsYRRiFtdRK71A",
  authDomain: "youearn-app.firebaseapp.com",
  projectId: "youearn-app",
  storageBucket: "youearn-app.appspot.com",
  messagingSenderId: "481260663821",
  appId: "1:481260663821:web:88f6eebd1ba6d94b879144",
  measurementId: "G-E4N20BM99K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebaseConfig };

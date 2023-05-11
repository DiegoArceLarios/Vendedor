// Import the functions you need from the SDKs you need
import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCmRSQUxMM05SjNHRQiG7o-EDaXeC6SND4",
  authDomain: "biblioteca-be341.firebaseapp.com",
  projectId: "biblioteca-be341",
  storageBucket: "biblioteca-be341.appspot.com",
  messagingSenderId: "233102425546",
  appId: "1:233102425546:web:a01d2271923f1ec3322333"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjfV3D8TGmI9All7rMoaSkTv_fKkaRotM",
  authDomain: "react-detect-hand.firebaseapp.com",
  projectId: "react-detect-hand",
  storageBucket: "react-detect-hand.appspot.com",
  messagingSenderId: "520314838293",
  appId: "1:520314838293:web:ce16109ad3ef4137cbdd1c",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };

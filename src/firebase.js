import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBlQ_ljeX5o_7vEssbuODyvvOzOiD6Q8Xw",
  authDomain: "todoist-clone-b2411.firebaseapp.com",
  databaseURL:
    "https://todoist-clone-b2411-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todoist-clone-b2411",
  storageBucket: "todoist-clone-b2411.appspot.com",
  messagingSenderId: "122839487320",
  appId: "1:122839487320:web:29d71089f29259a5570b2d",
});

export { firebaseConfig as firebase }
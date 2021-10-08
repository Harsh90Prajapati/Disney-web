import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBo9vGQx_pn87OTHNAPVVJcW2CGHri0ik4",
  authDomain: "disney-app-5ef94.firebaseapp.com",
  projectId: "disney-app-5ef94",
  storageBucket: "disney-app-5ef94.appspot.com",
  messagingSenderId: "776969198749",
  appId: "1:776969198749:web:80122a6be1a7fe3b7fc874",
  measurementId: "G-Y87RB87LLZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
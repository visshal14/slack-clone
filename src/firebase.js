// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };

export default db;
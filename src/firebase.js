// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEVSCm4UQzbF3wCJiEShtoLA6xBqylHwM",
    authDomain: "slack-clone-99340.firebaseapp.com",
    projectId: "slack-clone-99340",
    storageBucket: "slack-clone-99340.appspot.com",
    messagingSenderId: "860084293224",
    appId: "1:860084293224:web:6c1ca9803dc64dbd2af5dd"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};

export default db;
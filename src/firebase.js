import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBmWLlK2K3aqyTW0e2FzuGjqOUZDN1mYBk",
    authDomain: "trader-coach.firebaseapp.com",
    projectId: "trader-coach",
    storageBucket: "trader-coach.appspot.com",
    messagingSenderId: "64707724653",
    appId: "1:64707724653:web:7acd269deab1d345228664",
    measurementId: "G-FCGR3CZ3N1"
};

const fire = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

// configure the google signIn
const GoogleSignIn = new firebase.auth.GoogleAuthProvider();

export { fire, db, auth, GoogleSignIn };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBKxy4-L-g4Cd7FkAzRuynwXkoVtUaMDIM",
    authDomain: "auth-development-16ff3.firebaseapp.com",
    projectId: "auth-development-16ff3",
    storageBucket: "auth-development-16ff3.appspot.com",
    messagingSenderId: "997144050325",
    appId: "1:997144050325:web:98c55079ccbc667c28399c"
})

export const auth = app.auth()
export default app
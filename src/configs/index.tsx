import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQ34XB9KUHWynTYNjqpDhjNcgeCAWkltw",
    authDomain: "vcpmc-21f18.firebaseapp.com",
    projectId: "vcpmc-21f18",
    storageBucket: "vcpmc-21f18.appspot.com",
    messagingSenderId: "413942742102",
    appId: "1:413942742102:web:96449889555716ef3a0ff7"
};

const app = initializeApp(firebaseConfig)
// const db = firebase.firestore()
export const db = getFirestore(app);
export const auth = getAuth(app)
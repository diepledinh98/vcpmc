import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAblkoLZJ1d01Bl1YXc7mbvorZEMiXGy_4",
    authDomain: "vcpmc-b1fbb.firebaseapp.com",
    projectId: "vcpmc-b1fbb",
    storageBucket: "vcpmc-b1fbb.appspot.com",
    messagingSenderId: "888455003518",
    appId: "1:888455003518:web:b5e0f00d565be3ebfec72f"
};

const app = initializeApp(firebaseConfig)
// const db = firebase.firestore()
export const db = getFirestore(app);
export const auth = getAuth(app)
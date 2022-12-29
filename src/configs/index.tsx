import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDa5bnSmXjg1gxp_ZrXOUEbQJzH6pZ8nOY",
    authDomain: "vpcmcproject.firebaseapp.com",
    projectId: "vpcmcproject",
    storageBucket: "vpcmcproject.appspot.com",
    messagingSenderId: "105705366707",
    appId: "1:105705366707:web:8309096ab4945baefd3cc6"
};

const app = initializeApp(firebaseConfig)
// const db = firebase.firestore()
export const db = getFirestore(app);
export const auth = getAuth(app)
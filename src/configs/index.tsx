import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // apiKey: "AIzaSyDa5bnSmXjg1gxp_ZrXOUEbQJzH6pZ8nOY",
    // authDomain: "vpcmcproject.firebaseapp.com",
    // projectId: "vpcmcproject",
    // storageBucket: "vpcmcproject.appspot.com",
    // messagingSenderId: "105705366707",
    // appId: "1:105705366707:web:8309096ab4945baefd3cc6"
    apiKey: "AIzaSyCVvMR7KqpIjk5yxvR5Cs9vGYdlZKc9t1Q",
    authDomain: "projectvcpmc.firebaseapp.com",
    projectId: "projectvcpmc",
    storageBucket: "projectvcpmc.appspot.com",
    messagingSenderId: "521812982938",
    appId: "1:521812982938:web:723c9ad00ba8f846683323"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const auth = getAuth(app)

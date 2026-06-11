
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "fir-998f2.firebaseapp.com",
  projectId: "fir-998f2",
  storageBucket: "fir-998f2.firebasestorage.app",
  messagingSenderId: "1061411848279",
  appId: "1:1061411848279:web:5484fbbd7708f019aea312"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
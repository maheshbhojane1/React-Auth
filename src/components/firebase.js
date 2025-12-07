import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkJC-X8eNsI_Jsoyd3CSZP3Klfke3M6Ts",
  authDomain: "logon-auth-eb08b.firebaseapp.com",
  projectId: "logon-auth-eb08b",
  storageBucket: "logon-auth-eb08b.firebasestorage.app",
  messagingSenderId: "372724949400",
  appId: "1:372724949400:web:c4aeeaddd7d24951a8cbed"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;
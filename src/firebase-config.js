import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALMMY7C-dybCyVsiFkQMeFmNY4TxrcZdI",
    authDomain: "authentication-example-7b137.firebaseapp.com",
    projectId: "authentication-example-7b137",
    storageBucket: "authentication-example-7b137.appspot.com",
    messagingSenderId: "99520853378",
    appId: "1:99520853378:web:5759f19c0d37232eb34b9b",
    measurementId: "G-3T32F313RE"
  };

  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
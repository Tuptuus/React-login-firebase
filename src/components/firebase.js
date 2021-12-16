import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZFKslZdGkHA-pxRD7NajUMMwnzyE8I8Y",
  authDomain: "login-991b6.firebaseapp.com",
  projectId: "login-991b6",
  storageBucket: "login-991b6.appspot.com",
  messagingSenderId: "543676338630",
  appId: "1:543676338630:web:608bf148b22a502b88e2c7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

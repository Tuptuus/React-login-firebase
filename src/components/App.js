import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import UserCard from "./UserCard";
import SignInCards from "./SignInCards";

const App = () => {
  const [mode, setMode] = useState("login");
  const [isLogin, setIsLogin] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerNick, setRegisterNick] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const handleChangeMode = () => {
    if (mode === "login") {
      setMode("register");
      setLoginEmail("");
      setLoginPass("");
    } else if (mode === "register") {
      setMode("login");
      setRegisterEmail("");
      setRegisterPass("");
      setRegisterNick("");
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPass
      );
      updateProfile(auth.currentUser, {
        displayName: registerNick,
      }).then(() => {});
      setIsLogin(true);
      setMode("login");
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      setIsLogin(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
    setIsLogin(false);
  };

  const handleRegisterEmail = (e) => {
    setRegisterEmail(e.target.value);
  };
  const handleRegisterPass = (e) => {
    setRegisterPass(e.target.value);
  };
  const handleRegisterNick = (e) => {
    setRegisterNick(e.target.value);
  };
  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPass = (e) => {
    setLoginPass(e.target.value);
  };

  return (
    <div className="app">
      <div className="CardsContainer">
        {isLogin === true ? (
          <UserCard nick={registerNick} handleLogout={logout} />
        ) : (
          <SignInCards
            handleLoginUser={login}
            handleLoginEmail={handleLoginEmail}
            handleLoginPass={handleLoginPass}
            handleChangeMode={handleChangeMode}
            handleRegisterEmail={handleRegisterEmail}
            handleRegisterPass={handleRegisterPass}
            handleRegisterNick={handleRegisterNick}
            register={register}
            mode={mode}
          />
        )}
      </div>
      <div className="background">
        <div className="dark"></div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import "../styles/userCard.css";
import { auth } from "./firebase-config";

const UserCard = (props) => {
  console.log(auth.currentUser.displayName);
  return (
    <div className="User__Card">
      <p className="User__Title">Witaj</p>
      <p>
        Twój nick:{" "}
        {auth.currentUser.displayName
          ? auth.currentUser.displayName
          : props.nick}
      </p>
      <p>Twój addres email: {auth.currentUser.email}</p>
      <button onClick={props.handleLogout} className="User__logoutBtn">
        Wyloguj się
      </button>
    </div>
  );
};

export default UserCard;

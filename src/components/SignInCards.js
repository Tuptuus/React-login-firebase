import React from "react";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

const SignInCards = (props) => {
  return (
    <>
      {props.mode === "login" ? (
        <LoginCard
          loginEnterPress={props.loginEnterPress}
          isLoading={props.isLoading}
          errorMessage={props.errorMessage}
          handleLoginUser={props.handleLoginUser}
          handleLoginEmail={props.handleLoginEmail}
          handleLoginPass={props.handleLoginPass}
          handleMode={props.handleChangeMode}
        />
      ) : (
        <RegisterCard
          registerEnterPress={props.registerEnterPress}
          isLoading={props.isLoading}
          errorMessage={props.errorMessage}
          handleRegisterUser={props.register}
          handleRegisterNick={props.handleRegisterNick}
          handleRegisterEmail={props.handleRegisterEmail}
          handleRegisterPass={props.handleRegisterPass}
          handleMode={props.handleChangeMode}
        />
      )}
    </>
  );
};

export default SignInCards;

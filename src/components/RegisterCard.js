import React from "react";
import { Form, Spinner } from "react-bootstrap";
import "../styles/RegisterCard.css";

const RegisterCard = (props) => {
  return (
    <div className="Register__Card">
      <p className="Register__Title">Zarejestruj Się</p>
      <Form.Floating className="Register__Email">
        <Form.Control
          onChange={props.handleRegisterEmail}
          className="Register__EmailBorder"
          id="floatingEmailCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingEmailCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className="Register__Email">
        <Form.Control
          onChange={props.handleRegisterNick}
          className="Register__EmailBorder"
          id="floatingNickCustom"
          type="text"
          placeholder="Nickname"
        />
        <label htmlFor="floatingNickCustom">Nickname</label>
      </Form.Floating>
      <Form.Floating className="Register__Pass">
        <Form.Control
          onChange={props.handleRegisterPass}
          className="Register__PassBorder"
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <p className="Register__error">{props.errorMessage}</p>
      <button
        onClick={props.handleRegisterUser}
        className="Register__registerBtn"
      >
        Zarejestruj Się
        {props.isLoading ? (
          <Spinner
            className="Register__loadingAnimation"
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : null}
      </button>
      <div className="Register__loginContainer">
        <p>Masz już konto?</p>
        <p onClick={props.handleMode} className="Register__login">
          Zaloguj się
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;

import React from "react";
import { Form } from "react-bootstrap";
import "../styles/LoginCard.css";

const LoginCard = (props) => {
  return (
    <div className="Login__Card">
      <p className="Login__Title">Zaloguj Się</p>
      <Form.Floating className="Login__Email">
        <Form.Control
          onChange={props.handleLoginEmail}
          className="Login__EmailBorder"
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className="Login__Pass">
        <Form.Control
          onChange={props.handleLoginPass}
          className="Login__PassBorder"
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <button onClick={props.handleLoginUser} className="Login__loginBtn">
        Zaloguj
      </button>
      <div className="Login__registerContainer">
        <p>Nie masz konta?</p>
        <p onClick={props.handleMode} className="Login__register">
          Zarejestruj się
        </p>
      </div>
    </div>
  );
};

export default LoginCard;

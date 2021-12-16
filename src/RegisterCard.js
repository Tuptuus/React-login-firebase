import React from "react";
import { Form } from "react-bootstrap";
import "./RegisterCard.css";

const RegisterCard = (props) => {
  return (
    <div className="Register__Card">
      <p className="Register__Title">Zarejestruj Się</p>
      <Form.Floating className="Register__Email">
        <Form.Control
          className="Register__EmailBorder"
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className="Register__Email">
        <Form.Control
          className="Register__EmailBorder"
          id="floatingInputCustom"
          type="text"
          placeholder="Nickname"
        />
        <label htmlFor="floatingInputCustom">Nickname</label>
      </Form.Floating>
      <Form.Floating className="Register__Pass">
        <Form.Control
          className="Register__PassBorder"
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <Form.Floating className="Register__Pass">
        <Form.Control
          className="Register__PassBorder"
          id="floatingPasswordCustom"
          type="password"
          placeholder="Confirm Password"
        />
        <label htmlFor="floatingPasswordCustom">Confirm Password</label>
      </Form.Floating>
      <button className="Register__registerBtn">Zarejestruj Się</button>
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

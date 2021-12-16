import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

class App extends Component {
  state = {
    mode: "login",
    loginEmail: "",
    loginPass: "",
    RegisterEmail: "",
    RegisterNick: "",
    RegisterPass: "",
    RegisterConfPass: "",
  };

  handleChangeMode = () => {
    if (this.state.mode === "login") {
      this.setState({
        mode: "register",
      });
    } else if (this.state.mode === "register") {
      this.setState({
        mode: "login",
      });
    }
  };
  render() {
    const { mode } = this.state;
    return (
      <div className="app">
        <div className="CardContainer">
          {mode === "login" ? (
            <LoginCard handleMode={this.handleChangeMode} />
          ) : (
            <RegisterCard handleMode={this.handleChangeMode} />
          )}
        </div>
        <div className="background">
          <div className="dark"></div>
        </div>
      </div>
    );
  }
}

export default App;

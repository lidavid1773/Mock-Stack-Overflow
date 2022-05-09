import React from "react";
import Button from "./Button";
import axios from "axios";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showSuccessfulMessage: false,
      showInvalidLoginMessage: false
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  validateFormData = async () => {
    const res = await axios.get(
      `http://localhost:8000/loginSuccessful/${this.state.email}/${this.state.password}`
    );
    let loginSuccessfulStatus = res.data;
    if (loginSuccessfulStatus) {
      this.setState({
        showSuccessfulMessage: true,
        showInvalidLoginMessage: false
      });
      setTimeout(
        () =>
          this.props.handleShowMainBody({
            guest: false,
            email: this.state.email,
            username: "temp username"
          }),
        1000
      );
    } else {
      this.setState({
        showInvalidLoginMessage: true
      });
    }
  };

  render() {
    return (
      <div className="center-div">
        <h1>Please enter your account information</h1>
        <div className="error-message">
          {this.state.showInvalidLoginMessage ? (
            <div>You have entered an email/password combination.</div>
          ) : null}
        </div>
        <div
          style={{
            display: this.state.showSuccessfulMessage ? "block" : "none",
            color: "green"
          }}
        >
          Login successful... redirecting you to home page
        </div>
        <p>
          <i>Email</i>
        </p>
        <input onChange={(e) => this.handleChange(e, "email")} type="text" />
        <p>
          <i>Password</i>
        </p>
        <input onChange={(e) => this.handleChange(e, "password")} type="text" />
        <div className="post-answer-btn">
          <Button buttonLabel="Login" handler={this.validateFormData}></Button>
        </div>
        <div className="post-answer-btn">
          <Button
            buttonLabel="Create a new account"
            handler={this.props.handleRegisterNewUser}
          ></Button>
        </div>
      </div>
    );
  }
}

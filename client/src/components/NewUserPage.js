import React from "react";
import Button from "./Button";
import axios from "axios";

export default class NewUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showSuccessfulMessage: false,
      showMismatchedPasswordsError: false,
      showInvalidEmailError: false,
      showAccountAlreadyExistsError: false
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  validateFormData = () => {
    // check if password == confirmPassword
    let mismatchedPasswordsError =
      this.state.password === this.state.confirmPassword ? false : true;

    // make sure email is valid form
    let invalidEmailError = !(
      this.state.email.includes("@") && this.state.email.includes(".")
    );

    // check if account with email already exists

    // check if password contains username or email id

    let accountAlreadyExists = true;

    this.setState({ showMismatchedPasswordsError: mismatchedPasswordsError });
    this.setState({ showInvalidEmailError: invalidEmailError });
    this.setState({ showAccountAlreadyExistsError: accountAlreadyExists });
    let error =
      mismatchedPasswordsError || invalidEmailError || accountAlreadyExists;

    // if no violations:
    if (!error) {
      // Add account to database

      this.setState({
        showSuccessfulMessage: true
      });
      setTimeout(() => this.props.handleLoginToExistingUser(), 1000);
    }
  };

  render() {
    return (
      <div className="center-div">
        <h1>Please fill out the following fields to create a new account!</h1>
        <div className="error-message">
          {this.state.showMismatchedPasswordsError ? (
            <div>Your passwords do not match!</div>
          ) : null}
          {this.state.showInvalidEmailError ? (
            <div>Your email is invalid!</div>
          ) : null}
          {this.state.showAccountAlreadyExistsError ? (
            <div>An account with this email already exists!</div>
          ) : null}
        </div>
        <p>
          <i>Username</i>
        </p>
        <input
          name="username"
          onChange={(e) => this.handleChange(e, "username")}
          type="text"
        />
        <p>
          <i>Email</i>
        </p>
        <input
          name="email"
          onChange={(e) => this.handleChange(e, "email")}
          type="text"
        />
        <p>
          <i>Password</i>
        </p>
        <input
          name="password"
          onChange={(e) => this.handleChange(e, "password")}
          type="text"
        />
        <p>
          <i>Confirm your password</i>
        </p>
        <input
          name="confirmPassword"
          onChange={(e) => this.handleChange(e, "confirmPassword")}
          type="text"
        />
        <div className="post-answer-btn">
          <Button
            buttonLabel="Sign Up"
            handler={this.validateFormData}
          ></Button>
        </div>
        <div
          style={{
            display: this.state.showSuccessfulMessage ? "block" : "none",
            color: "green"
          }}
        >
          Register successful... redirecting you to login page
        </div>
      </div>
    );
  }
}

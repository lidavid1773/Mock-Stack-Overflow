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
      showAccountAlreadyExistsError: false,
      showInvalidPasswordError: false
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  validateFormData = async () => {
    // check if password == confirmPassword
    let mismatchedPasswordsError =
      this.state.password === this.state.confirmPassword ? false : true;

    // make sure email is valid form
    let invalidEmailError = !(
      this.state.email.includes("@") && this.state.email.includes(".")
    );

    // check if account with email already exists
    const res = await axios.get(
      `http://localhost:8000/checkIfAccountExists/${this.state.email}`
    );
    let accountAlreadyExists = res.data.length === 0 ? false : true;

    // check if password contains username or email id
    let emailId = this.state.email.split("@");
    let invalidPasswordError =
      this.state.password.includes(this.state.username) ||
      this.state.password.includes(emailId[0])
        ? true
        : false;

    this.setState({ showMismatchedPasswordsError: mismatchedPasswordsError });
    this.setState({ showInvalidEmailError: invalidEmailError });
    this.setState({ showAccountAlreadyExistsError: accountAlreadyExists });
    this.setState({ showInvalidPasswordError: invalidPasswordError });
    let error =
      mismatchedPasswordsError ||
      invalidEmailError ||
      accountAlreadyExists ||
      invalidPasswordError;

    // if no violations:
    if (!error) {
      // Add account to database
      axios.get(
        `http://localhost:8000/createAccount/${this.state.username}/${this.state.email}/${this.state.password}`
      );
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
          {this.state.showInvalidPasswordError ? (
            <div>Your password may not contain your username or email id!</div>
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
          Registration successful... redirecting you to login page
        </div>
      </div>
    );
  }
}

import React from "react";
import Button from "./Button";

export default class NewUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showSuccessfulMessage: false
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  validateFormData = () => {
    console.log(
      "Add account to database, maybe frontend storage, and directs user to login page"
    );
    console.log(this.state);
    this.setState({
      showSuccessfulMessage: true
    });
    setTimeout(() => this.props.handleLoginToExistingUser(), 1000);
  };

  render() {
    return (
      <div>
        <h1>Please fill out the following fields to create a new account!</h1>
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

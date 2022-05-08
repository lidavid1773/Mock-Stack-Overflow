import React from "react";
import Button from "./Button";
import axios from "axios";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showSuccessfulMessage: false
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  validateFormData = () => {
    console.log(
      "Check if information is valid. If so, direct to their account home page"
    );
    this.setState({
      showSuccessfulMessage: true
    });
    setTimeout(() => this.props.handleShowMainBody(), 1000);
  };

  render() {
    return (
      <div className="center-div">
        <h1>Please enter your account information</h1>
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
        <div
          style={{
            display: this.state.showSuccessfulMessage ? "block" : "none",
            color: "green"
          }}
        >
          Login successful... redirecting you to home page
        </div>
      </div>
    );
  }
}

import React from "react";
import Button from "./Button";

export default class WelcomePage extends React.Component {
  render() {
    const {
      handleRegisterNewUser,
      handleLoginToExistingUser,
      handleContinueAsGuest
    } = this.props;
    return (
      <div>
        <h1>WELCOME TO FAKE STACK OVERFLOW!</h1>
        <Button
          buttonLabel="Register as a new user"
          handler={handleRegisterNewUser}
        />
        <Button
          buttonLabel="Login to an existing user"
          handler={handleLoginToExistingUser}
        />
        <Button
          buttonLabel="Continue as guest user"
          handler={handleContinueAsGuest}
        />
      </div>
    );
  }
}

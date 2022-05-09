import React from "react";
import MainBody from "./MainBody.js";
import WelcomePage from "./WelcomePage.js";
import NewUserPage from "./NewUserPage.js";
import LoginPage from "./LoginPage.js";

export default class FakeStackOverflow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: (
        <WelcomePage
          handleRegisterNewUser={this.handleRegisterNewUser}
          handleLoginToExistingUser={this.handleLoginToExistingUser}
          handleContinueAsGuest={this.handleContinueAsGuest}
        />
      )
    };
  }

  handleShowMainBody = (userInfo) => {
    // might need to pass in more stuff such as username, so that we wouldnt have to trigger a re render after grabbing data inside of mainbody
    // userInfo: {guest: bool, email: string}
    this.setState({
      page: (
        <MainBody
          userInfo={userInfo}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLoginToExistingUser}
        />
      )
    });
  };

  handleRegisterNewUser = () => {
    this.setState({
      page: (
        <NewUserPage
          handleLoginToExistingUser={this.handleLoginToExistingUser}
        />
      )
    });
  };

  handleLoginToExistingUser = () => {
    this.setState({
      page: (
        <LoginPage
          handleShowMainBody={this.handleShowMainBody}
          handleRegisterNewUser={this.handleRegisterNewUser}
        />
      )
    });
  };

  handleContinueAsGuest = () => {
    this.handleShowMainBody({ guest: true, email: "" });
  };

  handleLogout = () => {
    this.setState({
      page: (
        <WelcomePage
          handleRegisterNewUser={this.handleRegisterNewUser}
          handleLoginToExistingUser={this.handleLoginToExistingUser}
          handleContinueAsGuest={this.handleContinueAsGuest}
        />
      )
    });
  };

  render() {
    return <div>{this.state.page}</div>;
  }
}

import React from "react";
import Button from "./Button";

export default class NewAnswersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      showTextError: false,
      showUsernameError: false,
    };
  }

  validateFormData = (methods) => {
    const textError = this.state.text.length === 0 ? true : false;
    const usernameError =
      this.state.username.length === 0 || this.state.username.length > 15
        ? true
        : false;

    this.setState({ showTextError: textError });
    this.setState({ showUsernameError: usernameError });

    const error = textError || usernameError;

    if (!error) {
      const answer = {
        text: this.state.text,
        ans_by: this.state.username,
      };
      this.props.handlePostAnswer(answer, this.props.qid);
    }
  };

  handleChange = (event, input) => {
    if (input === "text") this.setState({ text: event.target.value });
    else this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <div className="error-message">
            {this.state.showTextError ? <div>Text cannot be empty!</div> : null}
            {this.state.showUsernameError ? (
              <div>Username cannot be empty or more than 15 characters!</div>
            ) : null}
          </div>

          <h1>Answer Text</h1>
          <p>
            <i>Should not be empty.</i>
          </p>
          <textarea
            onChange={(e) => this.handleChange(e, "text")}
            cols="100"
            rows="10"
          ></textarea>
        </div>
        <div>
          <h1>Username</h1>
          <p>
            <i>Should not be more than 15 characters.</i>
          </p>
          <input
            onChange={(e) => this.handleChange(e, "username")}
            type="text"
            style={{ width: "200px", height: "30px" }}
          />
        </div>
        <div className="post-answer-btn">
          <Button
            buttonLabel="Post Answer"
            handler={() => this.validateFormData(this.props.methods)}
          />
        </div>
      </div>
    );
  }
}

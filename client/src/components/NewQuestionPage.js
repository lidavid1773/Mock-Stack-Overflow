import React from "react";
import Button from "./Button";

// When the Post Question button is clicked:
// Gather all user input and validate them
// If all inputs are valid, then we want to form a question object and add it to model

export default class NewQuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      tags: "",
      username: "",
      showTitleError: false,
      showTextError: false,
      showTagsError: false,
      showUsernameError: false,
    };
  }

  validateFormData = (methods) => {
    const titleError =
      this.state.title.length === 0 || this.state.title.length > 100
        ? true
        : false;

    const textError = this.state.text.length === 0 ? true : false;
    const tagsError = this.state.tags.length === 0 ? true : false;
    const usernameError =
      this.state.username.length === 0 || this.state.username.length > 15
        ? true
        : false;

    this.setState({ showTitleError: titleError });
    this.setState({ showTextError: textError });
    this.setState({ showTagsError: tagsError });
    this.setState({ showUsernameError: usernameError });

    const error = titleError || textError || tagsError || usernameError;

    if (!error) {
      // generate tagIds information
      const tags = this.state.tags.split(" ");

      const question = {
        title: this.state.title,
        text: this.state.text,
        asked_by: this.state.username,
      };
      this.props.handlePostQuestion(question, tags);
    }
  };

  handleChange = (event, input) => {
    if (input === "title") this.setState({ title: event.target.value });
    else if (input === "text") this.setState({ text: event.target.value });
    else if (input === "tags") this.setState({ tags: event.target.value });
    else this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="error-message">
          {this.state.showTitleError ? (
            <div>Title cannot be empty or more than 100 characters!</div>
          ) : null}
          {this.state.showTextError ? <div>Text cannot be empty!</div> : null}
          {this.state.showTagsError ? <div>Tags cannot be empty!</div> : null}
          {this.state.showUsernameError ? (
            <div>Username cannot be empty or more than 15 characters!</div>
          ) : null}
        </div>

        <h1>Question Title</h1>
        <p>
          <i>Title should not be more than 100 characters.</i>
        </p>
        <textarea
          onChange={(e) => this.handleChange(e, "title")}
          cols="100"
          rows="3"
        ></textarea>

        <h1>Question Text</h1>
        <p>
          <i>Add details.</i>
        </p>
        <textarea
          onChange={(e) => this.handleChange(e, "text")}
          cols="100"
          rows="3"
        ></textarea>

        <h1>Tags</h1>
        <p>
          <i>Add Keywords separated by whitespace.</i>
        </p>
        <textarea
          onChange={(e) => this.handleChange(e, "tags")}
          cols="100"
          rows="3"
        ></textarea>

        <h1>Username</h1>
        <p>
          <i>Should not be more than 15 characters</i>
        </p>
        <textarea
          onChange={(e) => this.handleChange(e, "username")}
          cols="100"
          rows="3"
        ></textarea>

        <Button
          buttonLabel="Post Question"
          handler={() => this.validateFormData(this.props.methods)}
        />
      </div>
    );
  }
}

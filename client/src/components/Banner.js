import React from "react";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  render() {
    const {
      questionsColor,
      tagsColor,
      handleShowSearchResults,
      handleQuestionsLink,
      handleTagsLink,
      userInfo,
      handleLogout,
      handleLogin
    } = this.props;
    return (
      <div>
        <div className="banner">
          <div
            style={questionsColor ? { backgroundColor: "#0281e8" } : null}
            className="banner-contents banner-hoverable"
          >
            <a onClick={() => handleQuestionsLink()}>Questions</a>
          </div>
          <div
            style={tagsColor ? { backgroundColor: "#0281e8" } : null}
            className="banner-contents banner-hoverable"
          >
            <a onClick={() => handleTagsLink()}>Tags</a>
          </div>
          <div className="banner-contents">
            <b>Fake Stack Overflow</b>
          </div>
          <div className="banner-contents">
            <input
              onChange={this.handleChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleShowSearchResults(this.state.userInput);
                }
              }}
              type="text"
              placeholder="Search..."
            />
          </div>
          {userInfo.guest ? null : (
            <div
              className="banner-contents banner-hoverable"
              onClick={this.props.handleDisplayUserProfile}
            >
              {this.props.userInfo.username}
            </div>
          )}
          {userInfo.guest ? (
            <div
              className="banner-contents banner-hoverable"
              onClick={handleLogin}
            >
              Login
            </div>
          ) : (
            <div className="banner-contents">
              <div
                className="banner-contents banner-hoverable"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

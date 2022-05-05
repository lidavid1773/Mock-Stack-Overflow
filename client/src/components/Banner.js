import React from "react";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    const { handleShowSearchResults, handleQuestionsLink, handleTagsLink } =
      this.props;
    return (
      <div>
        <div className="banner">
          <div
            style={
              this.props.questionsColor ? { backgroundColor: "#0281e8" } : null
            }
            className="banner-contents banner-hoverable"
          >
            <a onClick={() => handleQuestionsLink()}>Questions</a>
          </div>
          <div
            style={this.props.tagsColor ? { backgroundColor: "#0281e8" } : null}
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
        </div>
      </div>
    );
  }
}

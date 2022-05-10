import React from "react";

export default class QuestionsTable extends React.Component {
  // a helper function that takes in a question id
  // generates and returns a table row for the question with the corresponding id
  generateTableRow = (qid) => {
    const { handleDisplayAnswers, methods, userInfo } = this.props;
    return (
      <div className="questions-table-row" key={qid}>
        <div className="questions-table-column-1 questions-table-column">
          <div>{`${methods.getQuestionViewCount(qid)} Views`}</div>
          <div>{`${methods.getQuestionAnswerCount(qid)} Answers`}</div>
          <div>
            <button
              onClick={() => methods.incrementQuestionVoteCount(qid)}
              className="make-inline"
              style={{ display: userInfo.guest ? "none" : "inline-block" }}
            >
              upvote
            </button>
            <div className="make-inline">
              {`${methods.getQuestionVoteCount(qid)} Votes`}
            </div>
            <button
              onClick={() => methods.decrementQuestionVoteCount(qid)}
              className="make-inline"
              style={{ display: userInfo.guest ? "none" : "inline-block" }}
            >
              downvote
            </button>
          </div>
        </div>
        <div className="questions-table-column-2 questions-table-column">
          <button
            className="questions-table-title-link"
            onClick={() => handleDisplayAnswers(qid)}
          >
            {methods.getQuestionTitle(qid)}
          </button>
          <div>{this.generateListOfTags(qid)}</div>
        </div>
        <div className="questions-table-column-3 questions-table-column">
          <div>{`Asked By ${methods.getQuestionAskedBy(qid)}`}</div>
          <div>{`On ${methods.getQuestionAskedOn(qid)}`}</div>
          <div>{`At ${methods.getQuestionAskedAt(qid)}`}</div>
        </div>
      </div>
    );
  };

  generateListOfTags = (qid) => {
    const { methods } = this.props;
    const tagIds = methods.getTagIds(qid);
    const tags = methods.getTags(tagIds);
    return (
      <div>
        {tags.map((tag, i) => (
          <div className="questions-table-tags" key={tagIds[i]}>
            {tag}
          </div>
        ))}
      </div>
    );
  };

  render() {
    // questions is an array of question objects that should be displayed
    // uses the model to generate any information needed for the table, such as the tags
    const { questions } = this.props;
    return (
      <div className="questions-table">
        {
          // want to display each question object in a separate div (row)
          questions.length == 0 ? (
            <div className="center-div">
              <h1>No Questions Found</h1>
            </div>
          ) : (
            questions.map((question) => this.generateTableRow(question.qid))
          )
        }
      </div>
    );
  }
}

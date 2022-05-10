import React from "react";
import HeaderRow from "./HeaderRow";
import QuestionsTable from "./QuestionsTable";

export default class TagsResultsPage extends React.Component {
  render() {
    const {
      handleAskAQuestion,
      tagObj,
      handleDisplayAnswers,
      methods,
      userInfo
    } = this.props;

    const taggedQuestions = methods.searchForQuestionTags(tagObj.name);
    return (
      <div>
        <HeaderRow
          column1={
            methods.searchForQuestionTags(tagObj.name).length === 1
              ? `${methods.searchForQuestionTags(tagObj.name).length} Question`
              : `${methods.searchForQuestionTags(tagObj.name).length} Questions`
          }
          column2={`Questions tagged [${tagObj.name}]`}
          handleAskAQuestion={handleAskAQuestion}
          userInfo={userInfo}
        />
        {/* Display a Question Table with all relevant questions*/}
        <QuestionsTable
          questions={taggedQuestions}
          handleDisplayAnswers={handleDisplayAnswers}
          methods={methods}
          userInfo={userInfo}
        />
      </div>
    );
  }
}

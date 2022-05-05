import React from "react";
import HeaderRow from "./HeaderRow";
import QuestionsTable from "./QuestionsTable";

export default class AllQuestionsPage extends React.Component {
  render() {
    const { handleAskAQuestion, handleDisplayAnswers, methods } = this.props;
    return (
      <div>
        <HeaderRow
          column1={`${methods.getNumberOfQuestions()} Questions`}
          column2={"All Questions"}
          handleAskAQuestion={handleAskAQuestion}
        />
        <QuestionsTable
          questions={methods.getAllQuestions()}
          handleDisplayAnswers={handleDisplayAnswers}
          methods={methods}
        />
      </div>
    );
  }
}

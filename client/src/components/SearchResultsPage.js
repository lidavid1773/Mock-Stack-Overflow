import React from "react";
import HeaderRow from "./HeaderRow";
import QuestionsTable from "./QuestionsTable";

export default class SearchResultsPage extends React.Component {
  render() {
    const { handleAskAQuestion, userInput, methods } = this.props;
    const arr = userInput.split(" ").map((string) => string.toLowerCase());
    // use arr to generate an array of questions to be passed as props to QuestionsTable component
    let questions = [];
    // iterate through the array of strings and
    for (let i = 0; i < arr.length; i++) {
      const s = arr[i];
      // if current string is [tagname], then add all questions with that tag name to questions
      if (s.charAt(0) === "[" && s.charAt(s.length - 1) === "]") {
        const tag = s.slice(1, s.length - 1);
        const results = methods.searchForQuestionTags(tag);
        for (let i = 0; i < results.length; i++) {
          questions.push(results[i]);
        }
      }
      // else current string is in a question's text or title, add that question to questions
      else {
        const results = methods.searchForQuestionNonTag(s);
        for (let i = 0; i < results.length; i++) {
          questions.push(results[i]);
        }
      }
    }

    // remove any duplicate question objects from display
    const newQuestions = [];
    for (let i = 0; i < questions.length; i++) {
      const currentQuestion = questions[i];
      let flag = false; // true if currentQuestion is in newQuestions
      for (let j = 0; j < newQuestions.length; j++) {
        if (newQuestions[j] === currentQuestion) {
          flag = true;
        }
      }
      if (!flag) {
        newQuestions.push(currentQuestion);
      }
    }

    questions = newQuestions;

    // questions array is finished

    return (
      <div>
        <HeaderRow
          column1={`${questions.length} Questions`}
          column2={"Search Results"}
          handleAskAQuestion={handleAskAQuestion}
        />
        <QuestionsTable
          questions={questions}
          handleDisplayAnswers={this.props.handleDisplayAnswers}
          methods={this.props.methods}
        />
      </div>
    );
  }
}

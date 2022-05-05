import React from "react";
import HeaderRow from "./HeaderRow";
import Button from "./Button";

export default class AnswersPage extends React.Component {
  render() {
    const { handleAskAQuestion, qid, handleAnswerQuestion, methods } =
      this.props;
    return (
      <div>
        <HeaderRow
          column1={`${methods.getQuestionAnswerCount(qid)} Answers`}
          column2={methods.getQuestionTitle(qid)}
          handleAskAQuestion={handleAskAQuestion}
        />
        {/* Second Row */}
        <div className="questions-table-row" key={qid}>
          <div className="questions-table-column-1 questions-table-column">
            {`${methods.getQuestionViewCount(qid)} Views`}
          </div>
          <div
            className="questions-table-column-2 questions-table-column"
            style={{ fontWeight: "lighter" }}
          >
            {methods.getQuestionText(qid)}
          </div>
          <div className="questions-table-column-3 questions-table-column">
            <div>{`Asked By ${methods.getQuestionAskedBy(qid)}`}</div>
            <div>{`On ${methods.getQuestionAskedOn(qid)}`}</div>
            <div>{`At ${methods.getQuestionAskedAt(qid)}`}</div>
          </div>
        </div>

        {/* Answers Table*/}
        {methods.getQuestionAnswers(qid).map((answerId) => (
          <div className="answers-table-row" key={answerId}>
            <div className="answers-table-column-1 answers-table-column">
              {methods.getAnswerText(answerId)}
            </div>
            <div className="answers-table-column-2 answers-table-column">
              <div>{`Ans By ${methods.getAnswerAnsBy(answerId)}`}</div>
              <div>{`On ${methods.getAnswerAnsOn(answerId)}`}</div>
              <div>{`At ${methods.getAnswerAnsAt(answerId)}`}</div>
            </div>
          </div>
        ))}
        <div className="answer-question-btn">
          <Button
            buttonLabel="Answer Question"
            handler={() => handleAnswerQuestion(qid)}
          />
        </div>
      </div>
    );
  }
}

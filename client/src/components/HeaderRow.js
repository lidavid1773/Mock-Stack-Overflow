import React from "react";
import Button from "./Button";

export default class HeaderRow extends React.Component {
  render() {
    const { column1, column2, handleAskAQuestion } = this.props;
    // Column1 and Column2 may vary for different pages, but column3 will always be Ask A Question button
    return (
      <div className="header-row">
        <div className="header-row-column-1">{column1}</div>
        <div className="header-row-column-2">{column2}</div>
        <div className="header-row-column-3">
          {<Button buttonLabel="Ask a Question" handler={handleAskAQuestion} />}
        </div>
      </div>
    );
  }
}

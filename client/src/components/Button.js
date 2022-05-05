import React from "react";

export default class Button extends React.Component {
  render() {
    const { buttonLabel, handler } = this.props;
    return (
      <div>
        <button onClick={handler} className="button">
          {buttonLabel}
        </button>
      </div>
    );
  }
}

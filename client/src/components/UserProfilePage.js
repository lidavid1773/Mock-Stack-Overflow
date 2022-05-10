import React from "react";

export default class UserProfilePage extends React.Component {
  render() {
    const { userInfo, methods } = this.props;
    return (
      <div>
        {`${userInfo.email}/${
          userInfo.username
        } has a reputation of: ${methods.getReputation(userInfo.email)}`}
      </div>
    );
  }
}

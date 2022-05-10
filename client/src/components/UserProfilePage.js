import React from "react";

export default class UserProfilePage extends React.Component {
  render() {
    const { userInfo, methods, userQuestions, userAnswers, userTags } =
      this.props;
    const timeCreated = new Date(methods.getTimeCreated(userInfo.email));
    const timeCreatedInMS = timeCreated.getTime();
    const timeSinceCreationMS = Date.now() - timeCreatedInMS;
    const timeSinceCreationMinutes = timeSinceCreationMS / 1000 / 60;
    const hours = timeSinceCreationMinutes / 60;
    const minutes = timeSinceCreationMinutes % 60;
    return (
      <div>
        <div>
          {`${userInfo.username} has a reputation of ${methods.getReputation(
            userInfo.email
          )}`}
        </div>
        <div>{`${
          userInfo.username
        } has been a member of fake stack overflow for ${Math.trunc(
          hours
        )} hours and ${Math.trunc(minutes)} minutes`}</div>
        <div>
          <div>
            {`Questions by ${userInfo.username}:`}
            <br />
            {userQuestions.map((question) => (
              <div>-{question}</div>
            ))}
          </div>
          <br />
          <div>{`Answers by ${userInfo.username}: ${userAnswers}`}</div>
          <br />
          <div>{`Tags by ${userInfo.username}: ${userTags}`}</div>
        </div>
      </div>
    );
  }
}

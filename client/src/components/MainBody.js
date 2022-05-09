import React from "react";
import AllQuestionsPage from "./AllQuestionsPage";
import NewQuestionPage from "./NewQuestionPage";
import Banner from "./Banner";
import SearchResultsPage from "./SearchResultsPage";
import AnswersPage from "./AnswersPage";
import NewAnswersPage from "./NewAnswersPage";
import TagsPage from "./TagsPage";
import TagsResultsPage from "./TagsResultsPage";
import UserProfilePage from "./UserProfilePage";
import axios from "axios";

// This component contains a state which is the page to be displayed in the main body
// Any handlers that would result in another page being loaded will be defined here
// and passed onto components
// For example, AllQuestionsPage will have an "Ask A Question" button.
// When clicked, it should render the NewQuestionPage by changing the mainBody from the
// state of this component to NewQuestionPage

export default class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBody: (
        <AllQuestionsPage
          handleAskAQuestion={this.handleAskAQuestion}
          handleDisplayAnswers={this.handleDisplayAnswers}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: true,
      bannerTagsColorEnabled: false,
      questions: [],
      tags: [],
      answers: []
    };
  }

  handleAskAQuestion = () => {
    this.setState({
      mainBody: (
        <NewQuestionPage
          handlePostQuestion={this.handlePostQuestion}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
        />
      ),
      bannerQuestionsColorEnabled: false,
      bannerTagsColorEnabled: false
    });
  };

  handlePostQuestion = (question, tags) => {
    // add question to model
    this.addQuestion(question);

    // add tags to model
    tags.forEach(async (tag) => {
      this.addTag(tag);
      const qidResponse = await axios.get(
        `http://localhost:8000/getQuestionId/${question.title}`
      );
      const tidResponse = await axios.get(
        `http://localhost:8000/getTagId/${tag}`
      );
      const qid = qidResponse.data;
      const tid = tidResponse.data;
      axios.get(`http://localhost:8000/addQT/${qid}/${tid}`);
    });

    this.setState({
      mainBody: (
        <AllQuestionsPage
          handleAskAQuestion={this.handleAskAQuestion}
          handleDisplayAnswers={this.handleDisplayAnswers}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: true,
      bannerTagsColorEnabled: false
    });
  };

  handleShowSearchResults = (userInput) => {
    this.setState({
      mainBody: (
        <SearchResultsPage
          handleAskAQuestion={this.handleAskAQuestion}
          userInput={userInput}
          handleDisplayAnswers={this.handleDisplayAnswers}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: false,
      bannerTagsColorEnabled: false
    });
  };

  handleDisplayAnswers = (qid) => {
    this.incrementQuestionViewCount(qid);
    this.setState({
      mainBody: (
        <AnswersPage
          handleAskAQuestion={this.handleAskAQuestion}
          qid={qid}
          handleAnswerQuestion={this.handleAnswerQuestion}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: false,
      bannerTagsColorEnabled: false
    });
  };

  handleAnswerQuestion = (qid) => {
    this.setState({
      mainBody: (
        <NewAnswersPage
          handlePostAnswer={this.handlePostAnswer}
          qid={qid}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
        />
      )
    });
  };

  handlePostAnswer = (answer, qid) => {
    // add answer to model
    this.addAnswer(answer);
    // add answer to question
    this.addQuestionAnswer(qid, answer);
    this.setState({
      mainBody: (
        <AnswersPage
          handleAskAQuestion={this.handleAskAQuestion}
          qid={qid}
          handleAnswerQuestion={this.handleAnswerQuestion}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: false,
      bannerTagsColorEnabled: false
    });
  };

  handleQuestionsLink = () => {
    this.setState({
      mainBody: (
        <AllQuestionsPage
          handleAskAQuestion={this.handleAskAQuestion}
          handleDisplayAnswers={this.handleDisplayAnswers}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: true,
      bannerTagsColorEnabled: false
    });
  };

  handleTagsLink = () => {
    this.setState({
      mainBody: (
        <TagsPage
          handleAskAQuestion={this.handleAskAQuestion}
          handleTagLinkClick={this.handleTagLinkClick}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: false,
      bannerTagsColorEnabled: true
    });
  };

  handleTagLinkClick = (tagObj) => {
    this.setState({
      mainBody: (
        <TagsResultsPage
          handleAskAQuestion={this.handleAskAQuestion}
          tagObj={tagObj}
          handleDisplayAnswers={this.handleDisplayAnswers}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      ),
      bannerQuestionsColorEnabled: false,
      bannerTagsColorEnabled: false
    });
  };

  handleDisplayUserProfile = () => {
    this.setState({
      mainBody: <UserProfilePage />
    });
  };

  getOn(date) {
    let d = new Date(date.toString());
    d = d.toString().split(" ");
    return `${d[1]} ${d[2]}, ${d[3]}`;
  }

  getAt(date) {
    let d = new Date(date.toString());
    d = d.toString().split(" ");
    return `${d[4]}`;
  }

  grabTagIds(qid, qt) {
    let arr = [];
    qt.forEach((tuple) => {
      if (tuple.qstnId === qid) {
        arr.push(tuple.tagId);
      }
    });
    return arr;
  }

  grabAnswerIds(qid, qa) {
    let arr = [];
    qa.forEach((tuple) => {
      if (tuple.qstnId === qid) {
        arr.push(tuple.ansId);
      }
    });
    return arr;
  }

  async updateCurrentStateAnswersPage(qid) {
    const questionsRes = await axios.get("http://localhost:8000/getQuestions");
    const tagsRes = await axios.get("http://localhost:8000/getTags");
    const answersRes = await axios.get("http://localhost:8000/getAnswers");
    const qaRes = await axios.get("http://localhost:8000/getQa");
    const qtRes = await axios.get("http://localhost:8000/getQt");
    const newQuestions = questionsRes.data.map((question) => ({
      qid: question.qid,
      title: question.title,
      text: question.text,
      tagIds: this.grabTagIds(question.qid, qtRes.data),
      asked_by: question.asked_by,
      asked_on: this.getOn(question.ask_date_time),
      asked_at: this.getAt(question.ask_date_time),
      answers: this.grabAnswerIds(question.qid, qaRes.data),
      views: question.views
    }));
    const newAnswers = answersRes.data.map((answer) => ({
      aid: answer.aid,
      text: answer.text,
      ans_by: answer.ans_by,
      ans_on: this.getOn(answer.ans_date_time),
      ans_at: this.getAt(answer.ans_date_time)
    }));
    this.setState((previousState) => ({
      questions: newQuestions,
      tags: tagsRes.data,
      answers: newAnswers,
      mainBody: (
        <AnswersPage
          handleAskAQuestion={this.handleAskAQuestion}
          qid={qid}
          handleAnswerQuestion={this.handleAnswerQuestion}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      )
    }));
  }

  async updateCurrentState() {
    const questionsRes = await axios.get("http://localhost:8000/getQuestions");
    const tagsRes = await axios.get("http://localhost:8000/getTags");
    const answersRes = await axios.get("http://localhost:8000/getAnswers");
    const qaRes = await axios.get("http://localhost:8000/getQa");
    const qtRes = await axios.get("http://localhost:8000/getQt");
    const newQuestions = questionsRes.data.map((question) => ({
      qid: question.qid,
      title: question.title,
      text: question.text,
      tagIds: this.grabTagIds(question.qid, qtRes.data),
      asked_by: question.asked_by,
      asked_on: this.getOn(question.ask_date_time),
      asked_at: this.getAt(question.ask_date_time),
      answers: this.grabAnswerIds(question.qid, qaRes.data),
      views: question.views
    }));
    const newAnswers = answersRes.data.map((answer) => ({
      aid: answer.aid,
      text: answer.text,
      ans_by: answer.ans_by,
      ans_on: this.getOn(answer.ans_date_time),
      ans_at: this.getAt(answer.ans_date_time)
    }));
    this.setState((previousState) => ({
      questions: newQuestions,
      tags: tagsRes.data,
      answers: newAnswers,
      mainBody: (
        <AllQuestionsPage
          handleAskAQuestion={this.handleAskAQuestion}
          handleDisplayAnswers={this.handleDisplayAnswers}
          methods={{
            getNumberOfQuestions: this.getNumberOfQuestions,
            getAllQuestions: this.getAllQuestions,
            getQuestionViewCount: this.getQuestionViewCount,
            incrementQuestionViewCount: this.incrementQuestionViewCount,
            getQuestionAnswerCount: this.getQuestionAnswerCount,
            getQuestionAnswers: this.getQuestionAnswers,
            getQuestionAskedBy: this.getQuestionAskedBy,
            getQuestionAskedOn: this.getQuestionAskedOn,
            getQuestionAskedAt: this.getQuestionAskedAt,
            getQuestionTitle: this.getQuestionTitle,
            getQuestionText: this.getQuestionText,
            addQuestion: this.addQuestion,
            addQuestionAnswer: this.addQuestionAnswer,
            getTagIds: this.getTagIds,
            getTagName: this.getTagName,
            getTagId: this.getTagId,
            getTags: this.getTags,
            getTagsLst: this.getTagsLst,
            getNumberOfTags: this.getNumberOfTags,
            addTag: this.addTag,
            tagExists: this.tagExists,
            contains: this.contains,
            getTagsList: this.getTagsList,
            searchForQuestionTags: this.searchForQuestionTags,
            searchForQuestionNonTag: this.searchForQuestionNonTag,
            getNumberOfAnswers: this.getNumberOfAnswers,
            getAnswerText: this.getAnswerText,
            getAnswerAnsBy: this.getAnswerAnsBy,
            getAnswerAnsOn: this.getAnswerAnsOn,
            getAnswerAnsAt: this.getAnswerAnsAt,
            addAnswer: this.addAnswer
          }}
          userInfo={this.props.userInfo}
        />
      )
    }));
  }

  componentDidMount() {
    this.updateCurrentState();
  }

  // Question related methods
  getNumberOfQuestions = () => {
    return this.state.questions.length;
  };

  getAllQuestions = () => {
    return this.state.questions;
  };

  getQuestionViewCount = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.views;
      }
    }
  };

  getQuestionAnswerCount = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.answers.length;
      }
    }
  };

  getQuestionAnswers = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.answers;
      }
    }
  };

  getQuestionAskedBy = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.asked_by;
      }
    }
  };

  getQuestionAskedOn = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.asked_on;
      }
    }
  };

  getQuestionAskedAt = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.asked_at;
      }
    }
  };

  getQuestionTitle = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.title;
      }
    }
  };

  getQuestionText = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.text;
      }
    }
  };

  // Tag related methods
  getTagIds = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        return currentQuestion.tagIds;
      }
    }
  };

  getTagName = (tagId) => {
    for (let i = 0; i < this.state.tags.length; i++) {
      if (this.state.tags[i].tid === tagId) {
        return this.state.tags[i].name;
      }
    }
  };

  getTagId = (tagName) => {
    for (let i = 0; i < this.state.tags.length; i++) {
      if (this.state.tags[i].name === tagName) {
        return this.state.tags[i].tid;
      }
    }
  };

  getTags = (tagIds) => {
    let tags = [];
    for (let i = 0; i < tagIds.length; i++) {
      tags.push(this.getTagName(tagIds[i]));
    }
    return tags;
  };

  getTagsLst = () => {
    return this.state.tags;
  };

  getNumberOfTags = () => {
    return this.state.tags.length;
  };

  tagExists = (tagName) => {
    for (let i = 0; i < this.getNumberOfTags(); i++) {
      const currentTag = this.state.tags[i];
      if (currentTag.name.toLowerCase() === tagName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  contains = (textOrTitle, input) => {
    const arr = textOrTitle.split(" ").map((string) => string.toLowerCase());
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === input) {
        return true;
      }
    }
    return false;
  };

  getTagsList = (i) => {
    const tags = [];
    const tagIds = this.state.questions[i].tagIds; // list of tags encoded in "t1", etc...
    tagIds.forEach((tagId) => tags.push(this.getTagName(tagId)));
    return tags;
  };

  searchForQuestionTags = (s) => {
    const results = [];
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const tags = this.getTagsList(i);
      for (let j = 0; j < tags.length; j++) {
        if (s === tags[j]) {
          results.push(this.state.questions[i]);
        }
      }
    }
    return results;
  };

  searchForQuestionNonTag = (s) => {
    const results = [];
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      if (
        this.contains(this.state.questions[i].text, s) ||
        this.contains(this.state.questions[i].title, s)
      ) {
        results.push(this.state.questions[i]);
      }
    }
    return results;
  };

  // Answer related methods
  getNumberOfAnswers = () => {
    return this.state.answers.length;
  };

  getAnswerText = (aId) => {
    for (let i = 0; i < this.getNumberOfAnswers(); i++) {
      const currentAnswer = this.state.answers[i];
      if (currentAnswer.aid === aId) {
        return currentAnswer.text;
      }
    }
  };

  getAnswerAnsBy = (aId) => {
    for (let i = 0; i < this.getNumberOfAnswers(); i++) {
      const currentAnswer = this.state.answers[i];
      if (currentAnswer.aid === aId) {
        return currentAnswer.ans_by;
      }
    }
  };

  getAnswerAnsOn = (aId) => {
    for (let i = 0; i < this.getNumberOfAnswers(); i++) {
      const currentAnswer = this.state.answers[i];
      if (currentAnswer.aid === aId) {
        return currentAnswer.ans_on;
      }
    }
  };

  getAnswerAnsAt = (aId) => {
    for (let i = 0; i < this.getNumberOfAnswers(); i++) {
      const currentAnswer = this.state.answers[i];
      if (currentAnswer.aid === aId) {
        return currentAnswer.ans_at;
      }
    }
  };

  // Methods that need to to send request to backend to update database
  // And then update current state to reflect the change on front end
  // Will need an endpoint for each of these methods
  // For Questions
  incrementQuestionViewCount = (qid) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        currentQuestion.views++;
      }
    }
    const newViews = this.getQuestionViewCount(qid);
    axios.get(
      `http://localhost:8000/incrementQuestionViewCount/${qid}/${newViews}`
    );
  };

  addQuestion = (questionObj) => {
    // this.state.questions.unshift(questionObj);
    // request to add question to db
    axios.get(
      `http://localhost:8000/addQuestion/${questionObj.title}/${questionObj.text}/${questionObj.asked_by}`
    );
    this.updateCurrentState();
  };

  addQuestionAnswer = async (qid, answerObj) => {
    for (let i = 0; i < this.getNumberOfQuestions(); i++) {
      const currentQuestion = this.state.questions[i];
      if (currentQuestion.qid === qid) {
        currentQuestion.answers.unshift(answerObj.aid);
      }
    }
    const aidResponse = await axios.get(
      `http://localhost:8000/getAnswerId/${answerObj.text}`
    );
    const aid = aidResponse.data;
    axios.get(`http://localhost:8000/addQA/${qid}/${aid}`);
    this.updateCurrentStateAnswersPage(qid);
  };

  // For Tags
  addTag = (tagName) => {
    this.state.tags.unshift(tagName);
    // request to add tag to db
    axios.get(`http://localhost:8000/addTag/${tagName}`);
  };

  // For Answers
  addAnswer = (answerObj) => {
    axios.get(
      `http://localhost:8000/addAnswer/${answerObj.text}/${answerObj.ans_by}`
    );
  };

  render() {
    return (
      <div>
        <Banner
          questionsColor={this.state.bannerQuestionsColorEnabled}
          tagsColor={this.state.bannerTagsColorEnabled}
          handleShowSearchResults={this.handleShowSearchResults}
          handleQuestionsLink={this.handleQuestionsLink}
          handleTagsLink={this.handleTagsLink}
          userInfo={this.props.userInfo}
          handleLogout={this.props.handleLogout}
          handleLogin={this.props.handleLogin}
          handleDisplayUserProfile={this.handleDisplayUserProfile}
        />
        {this.state.mainBody}
      </div>
    );
  }
}

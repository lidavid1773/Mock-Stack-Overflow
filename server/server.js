// Run this script to launch the server.
// The server should run on localhost port 8000.
// This is where you should start writing server-side code for this application.

const Answer = require("./db/Answer.js");
const Question = require("./db/Question.js");
const Tag = require("./db/Tag.js");
const Account = require("./db/Account.js");

// Start a server in https://localhost:8000
const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Connect to the running instance of MySQL
const mysql = require("mysql");
let userArgs = process.argv.slice(2);

user = userArgs[1];
pass = userArgs[3];

const connection = mysql.createConnection({
  host: "localhost",
  user: user,
  password: pass,
  database: "fake_so"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the MySQL database");
});

// When server is terminated (using CTRL+C), database is also disconnected.
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed.");
  });
  console.log("Database instance disconnected.");
});

// express middleware that lets our server accept json as a body inside of a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Endpoints which call the Answer/Question/Tag queries and passes connection as a parameter
// Get Requests
app.get("/getAnswers", (req, res) => {
  Answer.getAnswers(connection, res);
});

app.get("/getQuestions", (req, res) => {
  Question.getQuestions(connection, res);
});

app.get("/getTags", (req, res) => {
  Tag.getTags(connection, res);
});

app.get("/getQa", (req, res) => {
  Question.getQa(connection, res);
});

app.get("/getQt", (req, res) => {
  Question.getQt(connection, res);
});

app.get("/getAccounts", (req, res) => {
  Account.getAccounts(connection, res);
});

app.get("/incrementQuestionViewCount/:qid/:newViews", (req, res) => {
  Question.incrementQuestionViewCount(
    connection,
    res,
    req.params.qid,
    req.params.newViews
  );
});

app.get("/updateQuestionVoteCount/:qid/:newVotes", (req, res) => {
  Question.updateQuestionVoteCount(
    connection,
    res,
    req.params.qid,
    req.params.newVotes
  );
});

app.get("/updateAnswerVoteCount/:aid/:newVotes", (req, res) => {
  Answer.updateAnswerVoteCount(
    connection,
    res,
    req.params.aid,
    req.params.newVotes
  );
});

// Add new question, tag, or answer
app.get("/addQuestion/:title/:text/:asked_by", (req, res) => {
  Question.addQuestion(
    connection,
    res,
    req.params.title,
    req.params.text,
    req.params.asked_by
  );
});

app.get("/addAnswer/:text/:ans_by", (req, res) => {
  Answer.addAnswer(connection, res, req.params.text, req.params.ans_by);
});

app.get("/addTag/:tagName", (req, res) => {
  Tag.addTag(connection, res, req.params.tagName);
});

app.get("/addQT/:qid/:tid", (req, res) => {
  const qid = req.params.qid;
  const tid = req.params.tid;
  Question.addQt(connection, res, qid, tid);
});

app.get("/addQA/:qid/:aid", (req, res) => {
  const qid = req.params.qid;
  const aid = req.params.aid;
  Question.addQa(connection, res, qid, aid);
});

app.get("/getTagId/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  Tag.getTagId(connection, res, tagName);
});

app.get("/getQuestionId/:title", (req, res) => {
  const title = req.params.title;
  Question.getQuestionId(connection, res, title);
});

app.get("/getAnswerId/:text", (req, res) => {
  const text = req.params.text;
  Answer.getAnswerId(connection, res, text);
});

app.get("/createAccount/:username/:email/:password", (req, res) => {
  Account.createAccount(
    connection,
    res,
    req.params.username,
    req.params.email,
    req.params.password
  );
});

app.get("/checkIfAccountExists/:email", (req, res) => {
  Account.checkIfAccountExists(connection, res, req.params.email);
});

app.get("/loginSuccessful/:email/:password", (req, res) => {
  Account.loginSuccessful(
    connection,
    res,
    req.params.email,
    req.params.password
  );
});

app.get("/getReputation/:email", (req, res) => {
  Account.getReputation(connection, res, req.params.email);
});

app.get("/getUsername/:email", (req, res) => {
  Account.getUsername(connection, res, req.params.email);
});

app.get("/getAccountId/:email", (req, res) => {
  Account.getAccountId(connection, res, req.params.email);
});

app.get("/addAccountQuestion/:accountId/:qid", (req, res) => {
  const accountId = req.params.accountId;
  const qid = req.params.qid;
  Account.addAccountQuestion(connection, res, accountId, qid);
});

app.get("/getAccountQuestionIds/:accountId", (req, res) => {
  const accountId = req.params.accountId;
  Account.getAccountQuestionIds(connection, res, accountId);
});

app.get("/getQuestionTitle/:qid", (req, res) => {
  const qid = req.params.qid;
  Question.getQuestionTitle(connection, res, qid);
});

app.get("/addAccountTag/:accountId/:tid", (req, res) => {
  const accountId = req.params.accountId;
  const tid = req.params.tid;
  Account.addAccountTag(connection, res, accountId, tid);
});

app.get("/getAccountTagIds/:accountId", (req, res) => {
  const accountId = req.params.accountId;
  Account.getAccountTagIds(connection, res, accountId);
});

app.get("/getTagName/:tid", (req, res) => {
  const tid = req.params.tid;
  Tag.getTagName(connection, res, tid);
});

app.get("/getAccountAnswerIds/:accountId", (req, res) => {
  const accountId = req.params.accountId;
  Account.getAccountAnswerIds(connection, res, accountId);
});

app.get("/getAnswerText/:aid", (req, res) => {
  const aid = req.params.aid;
  Answer.getAnswerText(connection, res, aid);
});

app.get("/addAccountAnswer/:accountId/:aid", (req, res) => {
  const accountId = req.params.accountId;
  const aid = req.params.aid;
  Account.addAccountAnswer(connection, res, accountId, aid);
});

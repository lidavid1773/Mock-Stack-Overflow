// Question-related Queries

exports.getQuestions = function (connection, res) {
  const get_questions_query = `select * from question;`;
  connection.query(get_questions_query, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.incrementQuestionViewCount = function (connection, res, qid, newViews) {
  const query = `update question set views = ? where qid = ?;`;
  connection.query(query, [newViews, qid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("incremented!");
  });
};

exports.updateQuestionVoteCount = function (connection, res, qid, newVotes) {
  const query = `update question set votes = ? where qid = ?;`;
  connection.query(query, [newVotes, qid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("updated!");
  });
};

exports.addQuestion = function (connection, res, title, text, asked_by) {
  let q = {
    title: title,
    text: text,
    asked_by: asked_by
  };
  connection.query("insert into question set ?", q, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added question!");
  });
};

exports.getQa = function (connection, res) {
  connection.query(`select * from qa;`, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.getQt = function (connection, res) {
  connection.query(`select * from qt;`, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.addQt = function (connection, res, qid, tid) {
  const add_qt_query = `insert into qt values(?,?)`;
  connection.query(add_qt_query, [qid, tid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added qt!");
  });
};

exports.addQa = function (connection, res, qid, aid) {
  const add_qt_query = `insert into qa values(?,?)`;
  connection.query(add_qt_query, [qid, aid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added qa!");
  });
};

exports.getQuestionId = function (connection, res, title) {
  const query = `select qid from question where title = ?;`;
  connection.query(query, [title], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].qid);
  });
};

exports.getQuestionText = function (connection, res, qid) {
  const query = `select title from question where qid = ?;`;
  connection.query(query, [qid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].title);
  });
};

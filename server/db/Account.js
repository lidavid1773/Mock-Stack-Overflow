// Account-related queries

exports.createAccount = function (connection, res, username, email, password) {
  let account = {
    username: username,
    email: email,
    password: password
  };
  const query = "insert into account set ?";
  connection.query(query, account, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("account created!");
  });
};

exports.checkIfAccountExists = function (connection, res, email) {
  const query = "select accountId from account where email = ?;";
  connection.query(query, [email], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.loginSuccessful = function (connection, res, email, password) {
  const query = "select password from account where email = ?;";
  connection.query(query, [email], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    if (results.length === 0) res.json(false);
    else results[0].password === password ? res.json(true) : res.json(false);
  });
};

exports.getReputation = function (connection, res, email) {
  const query = "select reputation from account where email = ?;";
  connection.query(query, [email], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].reputation);
  });
};

exports.getAccounts = function (connection, res) {
  const get_accounts_query = `select * from account;`;
  connection.query(get_accounts_query, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.getUsername = function (connection, res, email) {
  const query = `select username from account where email = ?;`;
  connection.query(query, [email], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].username);
  });
};

exports.getAccountId = function (connection, res, email) {
  const query = `select accountId from account where email = ?;`;
  connection.query(query, [email], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].accountId);
  });
};

exports.addAccountQuestion = function (connection, res, accountId, qid) {
  const query = `insert into accountquestion values(?,?)`;
  connection.query(query, [accountId, qid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added accountquestion!");
  });
};

exports.getAccountQuestionIds = function (connection, res, accountId) {
  const query = `select qstnId from accountquestion where accId = ?;`;
  connection.query(query, [accountId], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.addAccountTag = function (connection, res, accountId, tid) {
  const query = `insert into accounttag values(?,?)`;
  connection.query(query, [accountId, tid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added accounttag!");
  });
};

exports.getAccountTagIds = function (connection, res, accountId) {
  const query = `select tagId from accounttag where accId = ?;`;
  connection.query(query, [accountId], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.getAccountAnswerIds = function (connection, res, accountId) {
  const query = `select ansId from accountanswer where accId = ?;`;
  connection.query(query, [accountId], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.addAccountAnswer = function (connection, res, accountId, aid) {
  const query = `insert into accountanswer values(?,?)`;
  connection.query(query, [accountId, aid], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added accountanswer!");
  });
};

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

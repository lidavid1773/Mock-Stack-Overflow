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
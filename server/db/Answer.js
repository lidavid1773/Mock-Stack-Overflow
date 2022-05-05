// Answer-related queries

exports.getAnswers = function (connection, res) {
  const get_answers_query = `select * from answer;`;
  connection.query(get_answers_query, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.addAnswer = function (connection, res, text, ans_by) {
  let a = {
    text: text,
    ans_by: ans_by,
  };
  connection.query("insert into answer set ?", a, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added answer!");
  });
};

exports.getAnswerId = function (connection, res, text) {
  const query = `select aid from answer where text = ?;`;
  connection.query(query, [text], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].aid);
  });
};

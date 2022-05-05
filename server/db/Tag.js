// Tag related queries

exports.getTags = function (connection, res) {
  const get_tags_query = `select * from tag;`;
  connection.query(get_tags_query, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results);
  });
};

exports.addTag = function (connection, res, tagName) {
  let t = {
    name: tagName,
  };
  connection.query("insert into tag set ?", t, function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json("added tag!");
  });
};

exports.getTagId = function (connection, res, tagName) {
  const query = `select tid from tag where name = ?;`;
  connection.query(query, [tagName], function (error, results) {
    if (error) {
      throw error;
      return;
    }
    res.json(results[0].tid);
  });
};

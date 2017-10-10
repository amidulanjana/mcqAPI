const Paper = require("../models/paper");
const User = require("../models/user");

exports.getPapers = function(req, res, next) {
  Paper.find({})
    .populate("author", "-password")
    .exec(function(err, papers) {
      res.send(papers);
    });
};

exports.addPapers = function(req, res, next) {
  const author = req.body.author;
  const numOfEnroll = req.body.numOfEnroll;
  const image = req.body.image;
  const paper = new Paper({
    author: author,
    numOfEnroll: numOfEnroll,
    image: image
  });
  paper.save(function(err) {
    if (err) res.send(err);
    res.send({ paperID: paper.id });
  });
};

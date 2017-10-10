const PaperComment = require("../models/paper_comment");

exports.getPaperComment = function(req, res, next) {
  PaperComment.find({}, function(err, comments) {
    res.send(comments);
  });
};

exports.addPaperComment = function(req, res, next) {
  const paper = req.body.paper;
  const user = req.body.user;
  const comment = req.body.comment;

  const paperComment = new PaperComment({
    paper: paper,
    user: user,
    comment: comment
  });

  paperComment.save(function(err) {
    if (err) res.send(err);
    res.send({ paperCommentID: paperComment.id });
  });
};

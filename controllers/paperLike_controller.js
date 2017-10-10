const PaperLike = require("../models/paper_like");

exports.getPaperLike = function(req, res, next) {
  PaperLike.find({}, function(err, likes) {
    res.send(likes);
  });
};

exports.addPaperLike = function(req, res, next) {
  const paper = req.body.paper;
  const user = req.body.user;
  const numOfLike = req.body.numOfLike;

  const paperLike = new PaperLike({
    paper: paper,
    user: user,
    numOfLike: numOfLike
  });

  paperLike.save(function(err) {
    if (err) res.send(err);
    res.send({ paperLikeID: paperLike.id });
  });
};

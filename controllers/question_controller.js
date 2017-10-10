const Question = require("../models/question");

exports.getQuestion = function(req, res, next) {
  Question.find({ paper: req.params.id }, function(err, questions) {
    res.send(questions);
  });
};

exports.addQuestion = function(req, res, next) {
  const paper = req.body.paper;
  const questionString = req.body.questionString;
  const answers = req.body.answers;
  const correctAnswers = req.body.correctAnswers;

  const question = new Question({
    paper: paper,
    question: questionString,
    answers: answers,
    correctAnswers: correctAnswers
  });
  question.save(function(err) {
    if (err) res.send(err);
    res.send({ questionID: question.id });
  });
};

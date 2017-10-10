const passportService = require("./services/passport");
const passport = require("passport");

const Authenication = require("./controllers/authentication");
const Paper = require("./controllers/paper_controller");
const PaperComment = require("./controllers/paperComment_controller");
const PaperLike = require("./controllers/paperLike_controller");
const Question = require("./controllers/question_controller");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });
const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"]
});

module.exports = function(app) {
  //local authentication
  app.post("/signin", requireSignin, Authenication.signin);
  app.post("/signup", Authenication.signup);

  //Google authentication
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    Authenication.signin
  );

  //facebook authentication
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["email"] })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    Authenication.signin
  );

  //auth end

  //routes
  app.get("/", requireAuth, function(req, res) {
    res.send("aasdsada");
  });

  //Papers
  //GET
  app.get("/papers", Paper.getPapers);
  //POST
  app.post("/papers/add", Paper.addPapers);

  //PaperComment
  //GET
  app.get("/paperComment", PaperComment.getPaperComment);
  //POST
  app.post("/paperComment/add", PaperComment.addPaperComment);

  //PaperLike
  //GET
  app.get("/paperLike", PaperLike.getPaperLike);
  //POST
  app.post("/paperLike/add", PaperLike.addPaperLike);

  //Questions
  //GET
  app.get("/questions/:id", Question.getQuestion);
  //POST
  app.post("/questions/add", Question.addQuestion);
};

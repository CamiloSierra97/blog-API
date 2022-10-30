//? Dependencies
const router = require("express").Router();
const postServices = require("./posts.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    postServices.getAllPosts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    postServices.createPost
  );

module.exports = router;

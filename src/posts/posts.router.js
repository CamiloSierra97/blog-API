//? Dependencies
const router = require("express").Router();
const postsServices = require("./posts.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    postsServices.getAllPosts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    postsServices.createPost
  );

module.exports = router;

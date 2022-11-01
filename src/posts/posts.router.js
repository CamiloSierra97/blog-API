//? Dependencies
const router = require("express").Router();
const postServices = require("./posts.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/posts

router
  .route("/")
  .get(
    // passport.authenticate("jwt", { session: false }),
    postServices.getAllPosts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    postServices.createPost
  );

router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    postServices.getPostById
  );

module.exports = router;

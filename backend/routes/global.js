const router = require("express").Router();
const mainRoutes = require("./main");
const userRoutes = require("./user");
const todoRoutes = require("./todo");

// read resources for main page
router.get("/", mainRoutes);

// user routers
router.post("/signup", userRoutes.signup);
router.post("/login", userRoutes.login);
router.patch("/:username", userRoutes.update);
router.delete("/:username", userRoutes.remove);

// todo routers
router.post("/create", todoRoutes.create);
router.patch("/:id", todoRoutes.update);
router.delete("/:id", todoRoutes.remove);

module.exports = router;

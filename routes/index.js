const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authentiation");
const { loginUser } = require("../controller/auth");
const { sessionProfile } = require("../controller/profile");

//create an unprotected login endpoint
router.post("/login", loginUser);

// 5. plug in all routes that the user can only access if logged in
router.get("/profile", authMiddleware, sessionProfile);
module.exports = router;

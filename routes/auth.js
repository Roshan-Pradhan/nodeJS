import { register, userregister } from "../controller/auth";
const express = require("express");
const router = express.Router();

// router.get("/login", login);

// router.get("/firstapi", firstapi);

router.post("/register", register);
router.post("/userregister", userregister);

//exporting all routers at once
module.exports = router;

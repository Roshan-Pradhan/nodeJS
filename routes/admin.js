import {
  adminDashboard,
  adminDashboard2,
  adminDashboard3,
} from "../controller/admin";

const express = require("express");
const router = express.Router();

//creating api

router.get("/admin", adminDashboard);
router.get("/admin2", adminDashboard2);
router.get("/admin3", adminDashboard3);

//exporting all routers at once
module.exports = router;

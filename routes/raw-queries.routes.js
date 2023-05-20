const express = require("express");
const router = express.Router();

const rawQueryController = require("../controllers/raw-queries.controller");
router.get("/getAllUsers", rawQueryController.getAllUser);
router.get("/getUsersWithModel", rawQueryController.getAllUserWithModel);
router.get("/getUserById/:id", rawQueryController.getUserById);
router.get("/getUserByName/:name", rawQueryController.getUserByName);
module.exports = router;

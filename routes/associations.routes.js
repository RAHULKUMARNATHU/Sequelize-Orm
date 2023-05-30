const express = require("express");
const router = express.Router();
const associateController = require("../controllers/association.controller");
const oneToMany = require('../controllers/oneToMany')

router.get("/one-to-one/get", associateController.getUser);
router.get("/one-to-one/create", associateController.createUser);
router.get("/one-to-many/get", oneToMany.getUser);
router.get("/one-to-many/create", oneToMany.createUser);

module.exports = router;

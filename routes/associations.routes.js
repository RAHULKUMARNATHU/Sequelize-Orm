const express = require("express");
const router = express.Router();
const associateController = require("../controllers/association.controller");
const oneToMany = require('../controllers/oneToMany')
const manyToMany = require('../controllers/many-to-many.controller');

/*One-to-One */
router.get("/one-to-one/get", associateController.getUser);
router.get("/one-to-one/create", associateController.createUser);
/*One-to-Many */
router.get("/one-to-many/get", oneToMany.getUser);
router.get("/one-to-many/create", oneToMany.createUser);

/*many-to-many */
router.get("/many-to-many/getUser", manyToMany.getUser);
router.get("/many-to-many/getContact", manyToMany.getContact);
router.get("/many-to-many/create", manyToMany.createUser);
module.exports = router;

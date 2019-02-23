const router = require("express").Router();
const requests = require("./requests");
const items = require("./items");

router.use("/requests", requests);
router.use("/items", items);
module.exports = router;

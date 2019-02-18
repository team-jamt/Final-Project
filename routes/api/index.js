const router = require("express").Router();
const requests = require("./requests");

// Book routes
router.use("/requests", requests);

module.exports = router;

const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

router.route("/").post(requestsController.create);

router.route("/rentalitems").get(requestsController.findRentalItems);

router.route("/saleitems").get(requestsController.findSaleItems);

router.route("/requestitems").get(requestsController.findRequestItems);

router.route("/saleitems").put(requestsController.update);

module.exports = router;

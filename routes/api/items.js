const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

router.route("/").post(requestsController.create);

router.route("/rentalitems").get(requestsController.findRentalItems);

router.route("/saleitems").get(requestsController.findSaleItems);

router.route("/requestitems").get(requestsController.findRequestItems);

router.route("/myrentalitems/:user").get(requestsController.findMyRentalItems);

router.route("/mysaleitems/:user").get(requestsController.findMySaleItems);

router.route("/myrequests/:user").get(requestsController.findMyRequests);

router.route("/requestitems/:id").delete(requestsController.delete);

router.route("/rentalitems/:id").delete(requestsController.delete);

router.route("/saleitems/:id").delete(requestsController.delete);

router.route("/saleitems/:id").put(requestsController.update);

router.route("/rentalitems/:id").put(requestsController.update);

module.exports = router;

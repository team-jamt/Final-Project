const db = require("../models");
// import fire from "../client/src/config/Fire";

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRentalItems: function (req, res) {
    db.Item.find({ type: "Rent", rented: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSaleItems: function (req, res) {
    db.Item.find({ type: "Sale", rented: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRequestItems: function (req, res) {
    db.Item.find({ type: "Request" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMyRentalItems: function (req, res) {
    db.Item.find({ user: req.params.user, type: "Rent" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findMySaleItems: function (req, res) {
    db.Item.find({ user: req.params.user, type: "Sale" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  delete: function (req, res) {
    db.Item.findByIdAndDelete({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findMyRequests: function (req, res) {
    db.Item.find({ user: req.params.user, type: "Request" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findAll: function (req, res) {
    db.Request.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Request.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("update res ", req);
    db.Item.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { rented: true } },
      { $set: { owner: req.username } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Request.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

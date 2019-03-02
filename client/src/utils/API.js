import axios from "axios";

export default {
  postItem: function (postData) {
    console.log("this is it: ", postData);
    return axios.post("/api/items", postData);
  },
  getRentalItems: function () {
    return axios.get("/api/items/rentalitems");
  },
  getSaleItems: function () {
    return axios.get("/api/items/saleitems");
  },
  getRequestItems: function () {
    return axios.get("/api/items/requestitems");
  },
  getMyRentalItems: function (user) {
    return axios.get("/api/items/myrentalitems/" + user);
  },
  getMySaleItems: function (user) {
    return axios.get("/api/items/mysaleitems/" + user);
  },
  getMyRequests: function (user) {
    return axios.get("/api/items/myrequests/" + user);
  },
  deleteRequest: function (id) {
    return axios.delete("/api/items/requestitems/" + id);
  },
  deleteRentalItem: function (id) {
    return axios.delete("/api/items/rentalitems/" + id);
  },
  deleteSaleItem: function (id) {
    return axios.delete("/api/items/saleitems/" + id);
  },
  buyItem: function (id) {
    // console.log("tom's id: ", id);
    return axios.put("/api/items/saleitems/" + id);
  },
  rentItem: function (id) {
    console.log("tom's id: ", id);
    return axios.put("/api/items/rentalitems/" + id);
  }
};

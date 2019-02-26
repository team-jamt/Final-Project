import axios from "axios";

export default {
  // // Gets all books
  // getRequests: function () {
  //   return axios.get("/api/requests");
  // },
  // // Gets the book with the given id
  // getRequest: function (id) {
  //   return axios.get("/api/requests/" + id);
  // },
  // // Deletes the book with the given id
  // deleteRequest: function (id) {
  //   return axios.delete("/api/requests/" + id);
  // },
  // // Saves a book to the database
  // saveRequest: function (requestData) {
  //   console.log("this the data", requestData);
  //   return axios.post("/api/requests", requestData);
  // },
  postItem: function(postData) {
    console.log("this is it: ", postData);
    return axios.post("/api/items", postData);
  },
  getRentalItems: function() {
    return axios.get("/api/items/rentalitems");
  },
  getSaleItems: function() {
    return axios.get("/api/items/saleitems");
  },
  getRequestItems: function() {
    return axios.get("/api/items/requestitems");
  },
  buyItem: function(id) {
    // console.log("tom's id: ", id);
    return axios.put("/api/items/saleitems/" + id);
  },
  rentItem: function(id) {
    console.log("tom's id: ", id);
    return axios.put("/api/items/rentalitems/" + id);
  }
};

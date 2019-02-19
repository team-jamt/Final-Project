import axios from "axios";

export default {
  // Gets all books
  getRequests: function() {
    return axios.get("/api/requests");
  },
  // Gets the book with the given id
  getRequest: function(id) {
    return axios.get("/api/requests/" + id);
  },
  // Deletes the book with the given id
  deleteRequest: function(id) {
    return axios.delete("/api/requests/" + id);
  },
  // Saves a book to the database
  saveRequest: function(requestData) {
    console.log("this the data", requestData);
    return axios.post("/api/requests", requestData);
  }
};

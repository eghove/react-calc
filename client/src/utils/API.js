import axios from "axios";

export default {

  getAll: function() {
    return axios.get("/api/calculator/all");
  },

  getTen: function() {
    return axios.get("/api/calculator/get10");
  },

  postData: function(data) {
    return axios.post("/api/calculator/post", data);
  }
}
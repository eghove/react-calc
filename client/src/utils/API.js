import axios from "axios";

export default {

  getAll: function() {
    return axios.get("/api/calculator/all");
  }
}
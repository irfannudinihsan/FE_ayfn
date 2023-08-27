import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://be.aseanyouthforumnews.my.id",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default instance;

import axios from "axios";

export default axios.create({
  baseURL: "https://codeask-staging.herokuapp.com/v1/api/",
  headers: {
    Accept: "application/json",
    "Context-Type": "application/json; charset=UTF-8",
  },
});

import axios from "axios";

const baseURL =  axios.create({
  baseURL: "https://codeask-staging.herokuapp.com/v1/api/",
  headers: {
    Accept: "application/json",
    "Context-Type": "application/json; charset=UTF-8",
  },
});


export default baseURL;
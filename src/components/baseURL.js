import axios from "axios";
const BASE_URL = "https://codeask-staging.herokuapp.com/v1/api/"

const axiosPublic =  axios.create({
  baseURL: "https://codeask-staging.herokuapp.com/v1/api/",
  headers: {
    Accept: "application/json",
    "Context-Type": "application/json; charset=UTF-8",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true
});


export default axiosPublic;
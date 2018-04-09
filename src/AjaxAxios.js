import axios from "axios";

export const ajax = axios.create({
  oks: false,
  gotovo: false,
  // baseURL: "http://capi.rp/",
  baseURL: "http://capirp.us.to/",
  headers: {
    Authorization: "Bearer {token}",
    "Content-type": "application/json"
  }
});

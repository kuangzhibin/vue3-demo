import axios from "axios";
import { Message } from "element-ui";

const request = axios.create({
  timeout: 5000
});

request.interceptors.request.use(
  res => {
    try {
      if (!res) return;
      if (res.method === "get") {
        for (let key in res.params) {
          if (
            res.params[key] === "" ||
            res.params[key] === "undefined" ||
            res.params[key] === null ||
            res.params[key] === "null"
          ) {
            delete res.params[key];
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
    return res;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => response,
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default request;

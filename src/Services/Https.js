import axios from "axios";

axios.defaults.baseURL = "http://api.yararent.ir";
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;

import axios from "axios";
import store from "./store";

const api = axios.create({
  baseURL: "https://mahalatmasr.com/cis/public/api",
});

const state = store.getState();
const token = state;

store.subscribe(() => {
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    axios.defaults.headers.post["Content-Type"] = "application/json";
  } else {
    delete api.defaults.headers.common.authorization;
  }
});

export default api;

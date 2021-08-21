import axios from "axios";
import { getToken } from "../context/AuthContext";

const api = axios.create({
  baseURL: "https://omega-backend-nestjs.herokuapp.com",  
})

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

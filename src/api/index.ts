import axios from "axios";

export const api = axios.create({
  baseURL: "https://omega-backend-nestjs.herokuapp.com",  
})

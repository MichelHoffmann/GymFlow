import axios from 'axios';

const api = axios.create({
  ///baseURL: "https://gymflowback.onrender.com"|
  baseURL: "https://gymflowback-production.up.railway.app/",
  ///baseURL: "http://localhost:3000",
});

export default api;
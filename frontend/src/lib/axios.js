import axios from "axios";


// Use real backend URL in production
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5002/api"
  : "https://mern-to-do-list-f3nw.onrender.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
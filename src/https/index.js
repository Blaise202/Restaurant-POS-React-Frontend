import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
})

// API Endpoints
export const login = (data) => api.post("/user/login", data);
export const register = (data) => api.post("/user/register", data);
export const users = () => api.get("/user/all");
export const loggedInUser = () => api.get("/user/getUser");
export const orders = () => api.get("/order/all");
export const createOrder = (data) => api.post("/order/add", data);
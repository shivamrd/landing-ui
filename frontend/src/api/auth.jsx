import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Register
export const registerUser = (formData) =>
  API.post("/register", formData);

// Login
export const loginUser = (formData) =>
  API.post("/login", formData);

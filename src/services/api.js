import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Thay API của bạn vào đây
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default api;

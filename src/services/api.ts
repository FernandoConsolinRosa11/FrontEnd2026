import axios from "axios";

const api = axios.create({
    baseURL: "http://http://localhost:5173",
    timeout: 5000, 
    headers: { "Content-Type": "application/json" },
});

export default api;
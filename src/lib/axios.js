import axios from 'axios';

export const axiosInstance =axios.create({
    baseURL: 'http://localhost:5005/app',
    withCredentials:true
})

// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5005/api" : "/api",
//   withCredentials: true,
// });
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

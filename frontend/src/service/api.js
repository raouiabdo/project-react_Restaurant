import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchMenus = async () => {
  try {
    const response = await axiosInstance.get("/api/menu");
    return response.data;
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error;
  }
};

export default axiosInstance;




import axios from "axios";

// Instance Axios configurée
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000", // URL de votre backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Fonction pour récupérer les menus depuis le backend
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



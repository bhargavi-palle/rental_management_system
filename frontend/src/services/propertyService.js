import axios from "axios";

const API_URL = "https://rental-management-backend.onrender.com/api/properties";

export const getDashboardStats = async () => {
  return await axios.get(`${API_URL}/dashboard`);
};
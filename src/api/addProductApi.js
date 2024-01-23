import axios from "axios";

axios.defaults.baseURL = "https://project-fitness-app-back.onrender.com/api/";

export const addProduct= async (body) => {
  try {
    const { data } = await axios.post('dairy/addProduct', body);
    return data;
  } catch (error) {
    
    console.error("Error in addProduct:", error);
    throw error;
  }
};
import axios from 'axios';

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const getAllProducts = async () => {
  const { data } = await axios.get(`products`);
  console.log(data, 'PRODUCTS DATA');
  return data;
};

export const getAllCategories = async () => {
  const { data } = await axios.get(`categories`);
  console.log(data, 'PRODUCTS DATA');
  return data;
};

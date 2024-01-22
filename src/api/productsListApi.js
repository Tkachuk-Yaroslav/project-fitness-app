import axios from 'axios';

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const getProducts = async (allowed, category, query) => {
  let allowedValue;

  if (allowed === 'All') {
    allowedValue = 'all';
  } else if (allowed === 'Not recommended') {
    allowedValue = 'false';
  } else if (allowed === 'Recommended') {
    allowedValue = 'true';
  }

  const { data } = await axios.get('products/blood', {
    params: {
      allowed: allowedValue,
      category,
      query,
    },
  });
  return data;
};

export const getAllCategories = async () => {
  const { data } = await axios.get('categories');
  return data;
};

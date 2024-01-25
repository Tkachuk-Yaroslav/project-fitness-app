import axios from 'axios';

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const setStatistics = async () => {
  const { data } = await axios.get('statistic');
  return data;
};

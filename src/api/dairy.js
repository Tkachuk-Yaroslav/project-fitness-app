import axios from 'axios';

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const setExercise = async body => {
  const { data } = await axios.post('dairy/addExercise', body);
  return data;
};

export const getDiaryData = async param => {
  const params = {
    date: param,
  };

  const { data } = await axios.get('/dairy/archive', { params });
  return data;
};

import axios from 'axios';

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const setExercise = async body => {
  const { data } = await axios.post('dairy/addExercise', body);
  return data;
};

const params = {
  // date: '2024-01-17T13:57:32.000Z',
  date: '24/01/2024',
};

export const testData = async () => {
  const { data } = await axios.get('/dairy/archive', { params });
  console.log(data);
  // console.log(data)
  return data;
};

export const getDiaryData = async param => {
  console.log('param', param);

  const params = {
    date: param,
  };
  console.log('paramssss', params);

  const { data } = await axios.get('/dairy/archive', { params });
  // console.log(data)
  return data;
};

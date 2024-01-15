import axios from "axios";

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const getExercisesBodyParts = async () => {
    const {data} = await axios.get(`filters/bodyparts`)
    console.log(data)
    return data
};

export const getExercisesMuscles = async () => {
    const {data} = await axios.get(`filters/muscles`)
    console.log(data)
    return data
}


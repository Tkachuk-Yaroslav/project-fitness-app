import axios from "axios";

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/';

export const getExercisesBodyParts = async () => {
    const {data} = await axios.get(`filters/bodyparts`)
    console.log(data)
    return data
}
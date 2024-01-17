import axios from "axios";

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/exercises/';


export const getExercisesAllFilter = async (filter) => {
    const {data} = await axios.get(`filters?filter=${filter}`)
    return data
};


export const getExercisesMuscles = async () => {
    const {data} = await axios.get(`filters/muscles`)
    console.log(data)
    return data
}


import axios from "axios";

axios.defaults.baseURL = 'https://project-fitness-app-back.onrender.com/api/exercises/';

export const getExercisesBodyParts = async () => {
    const {data} = await axios.get(`filters?filter=Body parts`)
    console.log(data)
    return data
};

export const getExercisesMuscles = async () => {
    const {data} = await axios.get(`filters?filter=Muscles`)
    return data
};

export const getExercisesEquipment = async () => {
    const {data} = await axios.get(`filters?filter=Equipment`)
    return data
};


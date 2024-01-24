import axios from "axios";

axios.defaults.baseURL = "https://project-fitness-app-back.onrender.com/api/";

export const getExercisesBodyParts = async () => {
  const { data } = await axios.get(`exercises/filters?filter=Body parts`);
  return data;
};

export const getExercisesMuscles = async () => {
  const { data } = await axios.get(`exercises/filters?filter=Muscles`);
  return data;
};

export const getExercisesEquipment = async () => {
  const { data } = await axios.get(`exercises/filters?filter=Equipment`);
  return data;
};

export const getAllExercises = async (filter, category) => {
  const { data } = await axios(`exercises/exercises`, {
    params: { filter: `${filter}`, category: `${category}` },
  });
  console.log("getAllExercises =", data);
  return data;
};

export const addExerciseToDairy = async (exerciseData) => {
  try {
    const { data } = await axios.post("dairy/addExercise", exerciseData);
    console.log("addExerciseToDairy response =", data);
    return data;
  } catch (error) {
    console.error("Error adding exercise to dairy:", error);
    throw error;
  }
};

// export const addExercises = async (filter, category) => {
//   const { data } = await axios(`exercises/exercises`, {
//     params: { filter: `${filter}`, category: `${category}` },
//   });
//   console.log("getAllExercises =", data);
//   return data;
// };

// export const addContacts = createAsyncThunk(
//   "/contacts/addContacts",
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const response = await instance.post("/contacts", {
//         name: name,
//         number: number,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

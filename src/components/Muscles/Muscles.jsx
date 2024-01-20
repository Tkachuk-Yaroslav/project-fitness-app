// import { getExercisesMuscles } from "api/ApiExercises";

// import React, { useEffect, useState } from "react";
// import { CardContainer } from "./Muscles.styled";
// import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";

// import Slaider from "components/ExercisesMain/Exercises/Swiper/Swiper";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../ExercisesMain/Exercises/Swiper/swiper.css";

// function Muscles() {
//   const [MusclesExercises, setExercises] = useState([]);
//   useEffect(() => {
//     const fetchExercisesMuscles = async () => {
//       try {
//         const data = await getExercisesMuscles();
//         setExercises(data.result);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchExercisesMuscles();
//   }, []);
//   return (
//     <CardContainer>
//       <Swiper
//         spaceBetween="20px"
//         pagination={true}
//         autoplay={false}
//         // autoplay={{
//         //   delay: 2500,
//         //   disableOnInteraction: false,
//         // }}
//         speed={800}
//         loop={true}
//         // modules={[Pagination, Autoplay]}
//         modules={[Pagination]}
//       >
//         <SwiperSlide>
//           {/* Slide 1{" "} */}
//           {MusclesExercises.map(({ _id, filter, name, imgURL }) => (
//             <ExercisesSubcategoriesItem
//               key={_id}
//               _id={_id}
//               filter={filter}
//               name={name}
//               imgURL={imgURL}
//             />
//           ))}
//         </SwiperSlide>
//         {/* <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide> */}
//       </Swiper>
//     </CardContainer>
//   );
// }

// export default Muscles;
import React, { useEffect, useState } from "react";
import { CardContainer } from "./Muscles.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../ExercisesMain/Exercises/Swiper/swiper.css";
import { getExercisesMuscles } from "api/ApiExercises";

function Muscles() {
  const [MusclesExercises, setExercises] = useState([]);
  useEffect(() => {
    const fetchExercisesMuscles = async () => {
      try {
        const data = await getExercisesMuscles();
        setExercises(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesMuscles();
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedMusclesExercises = chunkArray(MusclesExercises, 10);

  return (
    <CardContainer>
      <Swiper
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={false}
        speed={800}
        loop={true}
      >
        {chunkedMusclesExercises.map((chunk, index) => (
          <SwiperSlide key={index}>
            {chunk.map(({ _id, filter, name, imgURL }) => (
              <ExercisesSubcategoriesItem
                key={_id}
                _id={_id}
                filter={filter}
                name={name}
                imgURL={imgURL}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </CardContainer>
  );
}

export default Muscles;

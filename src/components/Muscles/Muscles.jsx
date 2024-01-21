// установи точки перелома 1440 и 768, измени код так чтобы при  >= 1440 chunkSize=10,  при >= 768 chunkSize=9,  а при меньше 768 chunkSize=10, вот код

// import React, { useEffect, useState } from "react";
// import { CardContainer } from "./Muscles.styled";
// import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../ExercisesMain/Exercises/Swiper/swiper.css";
// import { getExercisesMuscles } from "api/ApiExercises";
// import { Pagination } from "swiper/modules";

// function Muscles() {
//   const [MusclesExercises, setExercises] = useState([]);
//   const [chunkSize, setChunkSize] = useState(9);

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

//     // Обработчик изменения ширины вьюпорта
//     const handleResize = () => {
//       const newChunkSize =
//         window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
//       setChunkSize(newChunkSize);
//     };

//     // Добавление слушателя события изменения размеров вьюпорта
//     window.addEventListener("resize", handleResize);

//     // Уборка слушателя события при размонтировании компонента
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const chunkArray = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   const chunkedMusclesExercises = chunkArray(MusclesExercises, chunkSize);
//   console.log("chunkedMusclesExercises=", chunkSize);
//   return (
//     <CardContainer>
//       <Swiper
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         autoplay={false}
//         speed={800}
//         loop={true}
//         modules={[Pagination]}
//       >
//         {chunkedMusclesExercises.map((chunk, index) => (
//           <SwiperSlide key={index}>
//             {chunk.map(({ _id, filter, name, imgURL }) => (
//               <ExercisesSubcategoriesItem
//                 key={_id}
//                 _id={_id}
//                 filter={filter}
//                 name={name}
//                 imgURL={imgURL}
//               />
//             ))}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </CardContainer>
//   );
// }

// export default Muscles;
// ====================================================
// import React, { useEffect, useState } from "react";
// import { CardContainer } from "./Muscles.styled";
// import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../ExercisesMain/Exercises/Swiper/swiper.css";
// import { getExercisesMuscles } from "api/ApiExercises";
// import { Pagination } from "swiper/modules";
// import sprite from "../../images/sprite.svg";
// function Muscles() {
//   const defaultChunkSize =
//     window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
//   const [MusclesExercises, setExercises] = useState([]);
//   const [chunkSize, setChunkSize] = useState(defaultChunkSize);

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

//     // Обработчик изменения ширины вьюпорта
//     const handleResize = () => {
//       const newChunkSize =
//         window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
//       setChunkSize(newChunkSize);
//     };

//     // Добавление слушателя события изменения размеров вьюпорта
//     window.addEventListener("resize", handleResize);

//     // Уборка слушателя события при размонтировании компонента
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const chunkArray = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   const chunkedMusclesExercises = chunkArray(MusclesExercises, chunkSize);

//   return (
//     <CardContainer>
//       <Swiper
//         spaceBetween={80}
//         // pagination={{ clickable: true, el: ".swiper-pagination" }}
//         pagination={{
//           clickable: true,
//           renderBullet: function (index, className) {
//             return `
//               <svg class="${className}">
//                 <use xlink:href="${sprite}/sprite.svg#icon-apple"></use>
//               </svg>
//             `;
//           },
//         }}
//         autoplay={false}
//         speed={800}
//         loop={true}
//         modules={[Pagination]}
//       >
//         {chunkedMusclesExercises.map((chunk, index) => (
//           <SwiperSlide key={index}>
//             {chunk.map(({ _id, filter, name, imgURL }) => (
//               <ExercisesSubcategoriesItem
//                 key={_id}
//                 _id={_id}
//                 filter={filter}
//                 name={name}
//                 imgURL={imgURL}
//               />
//             ))}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </CardContainer>
//   );
// }

// export default Muscles;
// ===============================================

import React, { useEffect, useState } from "react";
import { CardContainer } from "./Muscles.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../ExercisesMain/Exercises/Swiper/swiper.css";
import { getExercisesMuscles } from "api/ApiExercises";
import { Autoplay, Pagination } from "swiper/modules";
import sprite from "../../images/sprite.svg";

function Muscles() {
  const defaultChunkSize =
    window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
  const [MusclesExercises, setExercises] = useState([]);
  const [chunkSize, setChunkSize] = useState(defaultChunkSize);

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

    const handleResize = () => {
      const newChunkSize =
        window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
      setChunkSize(newChunkSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedMusclesExercises = chunkArray(MusclesExercises, chunkSize);

  return (
    <CardContainer>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={80}
        autoplay={false}
        speed={800}
        loop={true}
        // modules={[Pagination, Autoplay]}
        modules={[Pagination]}
        // className="my-swiper"
        // pagination={{ clickable: true, el: ".swiper-pagination" }}
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

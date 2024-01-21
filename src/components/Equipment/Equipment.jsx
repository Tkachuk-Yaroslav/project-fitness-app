import { getExercisesEquipment } from "api/ApiExercises";
import React, { useEffect, useState } from "react";
import { CardContainer } from "./Equipment.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../ExercisesMain/Exercises/Swiper/swiper.css";
import { Autoplay, Pagination } from "swiper/modules";
function Equipment() {
  const defaultChunkSize =
    window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 9;
  const [ExercisesEquipment, setExercisesEquipment] = useState([]);
  const [chunkSize, setChunkSize] = useState(defaultChunkSize);
  useEffect(() => {
    const fetchExercisesEquipment = async () => {
      try {
        const data = await getExercisesEquipment();
        setExercisesEquipment(data.result);
        // console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesEquipment();
    const handleResize = () => {
      const newChunkSize =
        window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 9;
      setChunkSize(newChunkSize);
    };

    // Добавление слушателя события изменения размеров вьюпорта
    window.addEventListener("resize", handleResize);

    // Уборка слушателя события при размонтировании компонента
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

  const chunkedEquipmentExercises = chunkArray(ExercisesEquipment, chunkSize);

  return (
    <CardContainer>
      <Swiper
        spaceBetween={80}
        pagination={true}
        autoplay={false}
        speed={800}
        loop={true}
        modules={[Pagination]}
        // modules={[Pagination, Autoplay]}
      >
        {chunkedEquipmentExercises.map((chunk, index) => (
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

export default Equipment;

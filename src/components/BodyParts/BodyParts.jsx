import { getExercisesBodyParts } from "api/ApiExercises";
import React, { useEffect, useState } from "react";
import { CardContainer } from "./BodyParts.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { useSelector } from "react-redux";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { createPhotoCardsMarkup } from "api/api";

import "swiper/css";
import "swiper/css/pagination";
import "../ExercisesMain/Exercises/Swiper/swiper.css";

function BodyParts() {
  const defaultChunkSize =
    window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
  const state = useSelector((state) => state);
  console.log("state", state);
  const [ExercisesBodyParts, setExercises] = useState([]);
  const [chunkSize, setChunkSize] = useState(defaultChunkSize);
  useEffect(() => {
    const fetchExercisesBodyParts = async () => {
      try {
        const data = await getExercisesBodyParts();
        setExercises(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesBodyParts();

    // Обработчик изменения ширины вьюпорта
    const handleResize = () => {
      const newChunkSize =
        window.innerWidth >= 1440 ? 10 : window.innerWidth >= 768 ? 9 : 10;
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
  const chunkedBodyPartsExercises = chunkArray(ExercisesBodyParts, chunkSize);

  return (
    <CardContainer>
      <Swiper
        spaceBetween={80}
        pagination={{ clickable: true }}
        autoplay={false}
        speed={800}
        loop={true}
        modules={[Pagination]}
        // modules={[Pagination, Autoplay]}
      >
        {chunkedBodyPartsExercises.map((chunk, index) => (
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

export default BodyParts;

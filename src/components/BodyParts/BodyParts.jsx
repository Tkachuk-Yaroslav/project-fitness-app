import { getExercisesBodyParts } from "api/ApiExercises";
import { useEffect, useState } from "react";
import { CardContainer } from "./BodyParts.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { useSelector } from "react-redux";
import Slaider from "components/ExercisesMain/Exercises/Swiper/Swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { createPhotoCardsMarkup } from "api/api";

import "swiper/css";
import "swiper/css/pagination";
import "../ExercisesMain/Exercises/Swiper/swiper.css";
function BodyParts() {
  const state = useSelector((state) => state);
  console.log("state", state);
  const [listExercises, setExercises] = useState([]);
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
  }, []);
  console.log(listExercises);
  return (
    <CardContainer>
      <Swiper
        spaceBetween="20px"
        pagination={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        speed={800}
        loop={true}
        // modules={[Pagination, Autoplay]}
        modules={[Pagination]}
      >
        <SwiperSlide>
          Slide 1{" "}
          {listExercises.map(({ _id, filter, name, imgURL }) => (
            <ExercisesSubcategoriesItem
              key={_id}
              _id={_id}
              filter={filter}
              name={name}
              imgURL={imgURL}
            />
          ))}{" "}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      {/* {listExercises.map(({ _id, filter, name, imgURL }) => (
        <ExercisesSubcategoriesItem
          key={_id}
          _id={_id}
          filter={filter}
          name={name}
          imgURL={imgURL}
        />
      ))}  */}
    </CardContainer>
  );
}

export default BodyParts;

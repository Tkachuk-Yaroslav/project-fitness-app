import React from "react";
// import { Autoplay, Pagination } from "swiper/modules";
// import {
//   SwiperLink,
//   CardTasty,
//   CardFood,
//   CardShef,
//   SwiperTitle,
//   SwiperName,
//   SwiperArea,
// } from "../../pages/HomeStyled";
import { Swiper, SwiperSlide } from "swiper/react";
// import { createPhotoCardsMarkup } from "api/api";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

const Slaider = () => {
  // const [photoCards, setPhotoCards] = useState([]);

  // const fetchcPhotoCardsMarkup = async () => {
  //   try {
  //     const results = await createPhotoCardsMarkup();
  //     console.log("fetchcPhotoCardsMarkup=", results);
  //     setPhotoCards((prevPhotoCards) => [...results]);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchcPhotoCardsMarkup();
  // }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    // ====================
    // <Swiper
    //   spaceBetween="20px"
    //   pagination={true}
    //   // autoplay={{
    //   //   delay: 2500,
    //   //   disableOnInteraction: false,
    //   // }}
    //   speed={800}
    //   loop={true}
    //   modules={[Pagination, Autoplay]}
    //   // className="mySwiper"
    // >
    //   <div>
    //     {photoCards.map((photoCard, index) => {
    //       return (
    //         <SwiperSlide key={index}>
    //           <SwiperLink key={index} to={`${photoCard}`}>
    //             <CardShef>
    //               <img
    //                 className="img-shef"
    //                 src={photoCard.cook.imgUrl}
    //                 alt={photoCard.cook.name}
    //               ></img>
    //             </CardShef>
    //             {/* <img
    //                     src={photoCard.cook.imgUrl}
    //                     alt={photoCard.cook.name}
    //                     width="80px"
    //                     height="280px"
    //                   /> */}
    //             <CardFood>
    //               <img
    //                 className="img-food"
    //                 src={photoCard.topic.previewUrl}
    //                 alt={photoCard.topic.name}
    //               />
    //               <SwiperTitle class="swiper-title">
    //                 <SwiperName class="swiper-name">
    //                   {photoCard.topic.name}
    //                 </SwiperName>
    //                 <SwiperArea class="swiper-area">
    //                   {photoCard.topic.area}
    //                 </SwiperArea>
    //               </SwiperTitle>
    //             </CardFood>
    //             <CardTasty>
    //               <img
    //                 className="img-tasty"
    //                 src={photoCard.topic.imgUrl}
    //                 alt={photoCard.topic.name}
    //               />
    //             </CardTasty>
    //           </SwiperLink>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </div>
    // </Swiper>
  );
};
export default Slaider;

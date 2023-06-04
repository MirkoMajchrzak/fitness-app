import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import ExcwithTime from "../components/ExcwithTime";

function WorkoutSwipe() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide><ExcwithTime /></SwiperSlide>
        <SwiperSlide>Übung 2</SwiperSlide>
        <SwiperSlide>Übung 3</SwiperSlide>
        <SwiperSlide>Übung 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WorkoutSwipe;

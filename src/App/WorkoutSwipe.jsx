import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import ExcwithTime from "../components/ExcwithTime";
import ExcwithReps from "../components/ExcwithReps";

function WorkoutSwipe() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const isTimerPaused = activeSlide !== 0;

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
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <ExcwithTime isPaused={isTimerPaused} />
        </SwiperSlide>
        <SwiperSlide>
          <ExcwithReps />
        </SwiperSlide>
        <SwiperSlide>Übung 3</SwiperSlide>
        <SwiperSlide>Übung 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WorkoutSwipe;
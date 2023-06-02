import React from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function Swipe() {
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        ...
      </div>
      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination"></div>

      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* <!-- If we need scrollbar --> */}
      <div className="swiper-scrollbar"></div>
    </div>
  );
}

export default Swipe;

import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { createPortal } from "react-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper.css";
import "../css/swiper-bundle.css";
import Popup from "../components/Popup";
import ExcwithTime from "../components/ExcwithTime";
import ExcwithReps from "../components/ExcwithReps";
import close, { ReactComponent as Close } from "../images/close.svg";

const TOEXERCISE = gql`
  query toExercises($programId: ID!, $workoutId: ID!) {
    program(where: { id: $programId }) {
      id
      name
      workouts(where: { id: $workoutId }) {
        id
        name
        duration
        exercises {
          ... on ExerciseWithDuration {
            id
            duration
            exercise {
              id
              name
              description
            }
          }
          ... on ExerciseWithReps {
            id
            reps
            exercise {
              id
              name
              description
            }
          }
        }
      }
    }
  }
`;

function WorkoutSwipe() {
  const [showModal, setShowModal] = useState(false);
  const { programId, workoutId } = useParams();
  const { loading, error, data } = useQuery(TOEXERCISE, {
    variables: { programId, workoutId },
  });
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const isTimerPaused = activeSlide !== 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="z-10 fixed top-5 right-5"
      >
        <Close />
      </button>
      {showModal &&
        createPortal(
          <Popup onClose={() => setShowModal(false)} />,
          document.body
        )}
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

import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { createPortal } from "react-dom";
import Popup from "../components/Popup";
import ExcwithTime from "../components/ExcwithTime";
import ExcwithReps from "../components/ExcwithReps";
import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as SwipeLeft } from "../images/swipe_left.svg";
import { ReactComponent as SwipeRight } from "../images/swipe_right.svg";

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
              completed
            }
          }
          ... on ExerciseWithReps {
            id
            reps
            exercise {
              id
              name
              description
              completed
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
  // const isTimerPaused = activeSlide !== 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  const { exercises } = data.program.workouts[0]; // Assuming there is only one workout in the program

  const slides = exercises.map((exercise, index) => {
    if ("duration" in exercise) {
      return (
        <div key={index}>
          <ExcwithTime
            isPaused={activeSlide !== index}
            duration={exercise.duration}
          />
        </div>
      );
    }
    if ("reps" in exercise) {
      return (
        <div key={index}>
          <ExcwithReps reps={exercise.reps} />
        </div>
      );
    }
    return <div key={index}>Unknown exercise type</div>;
  });

  const handleNextSlide = () => {
    if (activeSlide === slides.length - 1) {
      // Reached the last slide, do nothing
      return;
    }
    setActiveSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    if (activeSlide === 0) {
      // Already at the first slide, do nothing
      return;
    }
    setActiveSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-5 right-5 z-[499]"
      >
        <Close />
      </button>
      {showModal &&
        createPortal(
          <Popup onClose={() => setShowModal(false)} />,
          document.body
        )}
      <div className="fixed z-[300] top-1/2 flex justify-between px-2 w-[100vw]">
        <button onClick={handlePrevSlide}>
          <SwipeLeft />
        </button>
        <button onClick={handleNextSlide}>
          <SwipeRight />
        </button>
      </div>
      <div className="mx-auto" style={{ width: "100%", overflow: "hidden" }}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} style={{ minWidth: "100%" }}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutSwipe;

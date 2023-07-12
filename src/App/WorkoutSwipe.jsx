import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { createPortal } from "react-dom";
import "../css/pagination.css";
import "../css/modal.css";
import Popup from "../components/Popup";
import Infocard from "../components/Infocard";
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
              type
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
              type
            }
          }
        }
      }
    }
  }
`;

function WorkoutSwipe() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const { programId, workoutId } = useParams();
  const { loading, error, data } = useQuery(TOEXERCISE, {
    variables: { programId, workoutId },
  });
  const [activeSlide, setActiveSlide] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data, workoutId);

  const { exercises } = data.program.workouts[0]; // Assuming there is only one workout in the program, needs to be improved

  const slides = exercises.map((exercise, index) => {
    const exerciseName = exercise.exercise.name;
    const exerciseDescribtion = exercise.exercise.description;
    const { duration } = exercise;
    console.log(exerciseDescribtion);
    if ("duration" in exercise) {
      const isLastSlide = activeSlide === exercises.length - 1;
      return (
        <div key={index}>
          <ExcwithTime
            workoutId={workoutId}
            isLastSlide={isLastSlide}
            isPaused={activeSlide !== index}
            exerciseName={exerciseName}
            duration={duration}
            exerciseDescribtion={exerciseDescribtion} // The Lastslide, Pausefunction duration, description, Name of the exercise as a prop
          />
          <p>{exerciseName}</p> {/* Display the name of the exercise */}
        </div>
      );
    }
    if ("reps" in exercise) {
      const isLastSlide = activeSlide === exercises.length - 1;
      return (
        <div key={index}>
          <ExcwithReps
            isLastSlide={isLastSlide}
            reps={exercise.reps}
            exerciseName={exerciseName}
            exerciseDescribtion={exerciseDescribtion}
          />{" "}
          {/* Pass the name, reps and descr. of the exercise as prop */}
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

  const renderPagination = () => {
    // not really a idea how it works, found it like so, edited it and it works, i hope
    return (
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeSlide === index ? "active" : ""}`} // switching the css styles if slide is active
            onClick={() => setActiveSlide(index)}
          ></span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <button
        onClick={() => setShowModal1(true)}
        className="fixed top-5 right-5 z-[499]"
      >
        <Close />
      </button>

      {showModal1 &&
        createPortal(
          <Popup onClose={() => setShowModal1(false)} />,
          document.body
        )}
      <div className="fixed z-[500] bottom-0 bg-greybg h-14 w-[100vw] rounded-t-3xl">
        <button
          onClick={() => setShowModal2(true)}
          className="fixed bg-mainbg w-7 h-7 rounded-full right-0  text-center mt-4 mr-6"
        >
          i
        </button>
        {showModal2 &&
          createPortal(
            <Infocard
              onClose={() => setShowModal2(false)}
              exercise={exercises[activeSlide]}
            />,
            document.body
          )}
      </div>

      <button
        className="fixed z-[300] top-1/2 left-2"
        onClick={handlePrevSlide}
      >
        <SwipeLeft />
      </button>
      <button
        className="fixed z-[300] top-1/2 right-2"
        onClick={handleNextSlide}
      >
        <SwipeRight />
      </button>

      <div className="h-[100vh] mx-auto w-[100%] overflow-hidden">
        <div className="pagination-container">{renderPagination()}</div>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutSwipe;

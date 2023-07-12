import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { NavLink } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const SET_WORKOUT_COMPLETE = gql`
  mutation SetWorkoutComplete($workoutId: ID!, $completed: Boolean!) {
    updateWorkout(data: { completed: $completed }, where: { id: $workoutId }) {
      completed
    }
  }
`;

function ExcwithTime({
  isPaused,
  exerciseName,
  duration,
  isLastSlide,
  workoutId,
}) {
  const [timerPaused, setTimerPaused] = useState(false);
  console.log(workoutId);

  const handlePauseResume = () => {
    setTimerPaused((prev) => !prev);
  };

  const [setWorkoutComplete] = useMutation(SET_WORKOUT_COMPLETE); // Mutation hook

  const handleWorkoutComplete = async () => {
    await setWorkoutComplete({
      variables: {
        completed: true,
        workoutId,
      },
    });
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">completed</div>;
    }

    return (
      <div className="" onClick={handlePauseResume}>
        <div className="timer flex flex-col items-center justify-center">
          <div className="text">Remaining</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <CountdownCircleTimer
              isPlaying={!timerPaused && !isPaused}
              duration={duration}
              colors={["#3a54e4", "#5ef3e8", "#eefea2", "#f8cf64", "#f69bc0"]}
              colorsTime={[25, 20, 12, 5, 0]}
              onComplete={() => ({ shouldRepeat: false, delay: 1 })}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="mt-2">
            <button onClick={handlePauseResume}>
              {timerPaused ? "Resume" : "Pause"}
            </button>
          </div>
          <h1 className="text-center">{exerciseName}</h1>
          <NavLink to={`/exercise/workout/training/end`}>
            <div className="flex justify-center">
              {isLastSlide && (
                <button
                  className="text-black px-6 py-3 bg-gradient-to-br from-orange to-pink rounded-3xl mt-14 shadow-lg shadow-black z-[12]"
                  onClick={handleWorkoutComplete} // Handle workout completion
                >
                  geschafft
                </button>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ExcwithTime;

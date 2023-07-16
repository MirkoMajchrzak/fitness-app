import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const SET_WORKOUT_COMPLETE = gql`
  mutation SetWorkoutComplete($workoutId: ID!, $completed: Boolean!) {
    updateWorkout(data: { completed: $completed }, where: { id: $workoutId }) {
      completed
    }
  }
`;

function ExcwithReps({ reps, exerciseName, isLastSlide, workoutId }) {
  // props taken by WorkoutSwipe
  const [setWorkoutComplete] = useMutation(SET_WORKOUT_COMPLETE); // Mutation hook

  const handleWorkoutComplete = async () => {
    await setWorkoutComplete({
      variables: {
        completed: true,
        workoutId,
      },
    });
  };
  return (
    <>
      <div className="h-[100vh]">
        <div className="h-[56%] flex flex-col justify-end">
          <h1 className="text-[64px] text-center font-bold">{reps} x</h1>
        </div>
        <h2 className="text-center mt-20">{exerciseName}</h2>
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
    </>
  );
}

export default ExcwithReps;

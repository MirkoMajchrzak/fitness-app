import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ExcwithReps({ reps, exerciseName, isLastSlide }) {
  // props taken by WorkoutSwipe
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
              <button className="text-black px-6 py-3 bg-gradient-to-br from-orange to-pink rounded-3xl mt-14 shadow-lg shadow-black z-[12]">
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

import React, { useState } from "react";

function ExcwithReps({ reps, exerciseName }) { //props taken by WorkoutSwipe
  return (
    <>
      <div className="h-[100vh]">
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <p className="text-[64px] font-bold">{reps} x</p>
          <h1 className="text-center absolute pt-[300px]">{exerciseName}</h1>
        </div>
      </div>
    </>
  );
}

export default ExcwithReps;

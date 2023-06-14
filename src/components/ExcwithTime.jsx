import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ExcwithTime({ isPaused, exerciseName, duration }) { //props taken by WorkoutSwipe
  const [timerPaused, setTimerPaused] = useState(false);
  const handlePauseResume = () => {
    setTimerPaused((prev) => !prev);
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
              isPlaying={!timerPaused && !isPaused} // Added condition to check both timerPaused and isPaused
              duration={duration}
              colors={["#3a54e4", "#5ef3e8", "#eefea2", "#f8cf64", "#f69bc0"]}
              colorsTime={[25, 20, 12, 5, 0]}
              onComplete={() => ({ shouldRepeat: false, delay: 1 })}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <button onClick={handlePauseResume}>
            {timerPaused ? "Resume" : "Pause"}
          </button>
          <h1 className="text-center">{exerciseName}</h1>
        </div>
      </div>
    </>
  );
}

export default ExcwithTime;

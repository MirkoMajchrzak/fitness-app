import React from "react";
import backbtn, { ReactComponent as Backbtn } from "../images/backbtn.svg";

function Workout() {
  // Close Button Function
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/workout`;
    navigate(path);
  };
  return (
    <>
      <button onClick={routeChange} className="fixed top-5 right-5">
        <Backbtn />
      </button>
      <div>
        <p className="text-xs text-center">Titel des Programms</p>
        <div className="">
          <h1>Tag 1</h1>
          <p className="text-xs">26 Min. · Kraft und Koordination</p>
        </div>

        <button className="bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-md z-[12]">
          <p>los!</p>
        </button>
      </div>
    </>
  );
}

export default Workout;

import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import backbtn, { ReactComponent as Backbtn } from "../images/backbtn.svg";

function Workout() {
  // Close Button Function
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <Backbtn />
      </button>
      <div>
        <p className="text-xs text-center pt-5">Titel des Programms</p>
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <h1>Tag 1</h1>
          <p className="text-xs">26 Min. · Kraft und Koordination</p>
        </div>
        <div className="w-screen flex justify-center">
          <button className="bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-md z-[12]">
            <p className="text-black">los!</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Workout;

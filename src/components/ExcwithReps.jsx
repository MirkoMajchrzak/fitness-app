import React, { useState } from "react";
/* import { createPortal } from "react-dom";
import Popup from "./Popup";
import close, { ReactComponent as Close } from "../images/close.svg"; */

function ExcwithReps() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
     {/*  <button
        onClick={() => setShowModal(true)}
        className="fixed top-5 right-5"
      >
        <Close />
      </button>
      {showModal &&
        createPortal(
          <Popup onClose={() => setShowModal(false)} />,
          document.body
        )} */}
      <div className="h-[100vh]">
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <p className="text-[64px] font-bold">30 x</p>
          <h1 className=" absolute pt-[300px]">Übung</h1>
        </div>
      </div>
    </>
  );
}

export default ExcwithReps;

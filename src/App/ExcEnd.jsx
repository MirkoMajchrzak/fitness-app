import React, { useState } from "react";
import { createPortal } from "react-dom";
import Popup from "../components/Popup";
import close, { ReactComponent as Close } from "../images/close.svg";

function ExcEnd() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-5 right-5"
      >
        <Close />
      </button>
      {showModal &&
        createPortal(
          <Popup onClose={() => setShowModal(false)} />,
          document.body
        )}
      <div className="">
        <h1>Glückwunsch!</h1>
        <h3>Du hast x Tage am Stück trainiert!</h3>
        <p>Wie war das Workout?</p>
        <div className="">
          <div className="">
            <p>zu leicht</p>
          </div>
          <div className="">
            <p>genau richtig</p>
          </div>
          <div className="">
            <p>zu schwer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExcEnd;

import { useState } from "react";
import { createPortal } from "react-dom";
import "../css/modal.css";
import PopupEnd from "../components/PopupEnd";
import { ReactComponent as Close } from "../images/close.svg";

function ExcEnd() {
  const [showModal3, setShowModal3] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setShowModal3(true)}
          className="fixed top-5 right-5 z-[499]"
        >
          <Close />
        </button>

        {showModal3 &&
          createPortal(
            <PopupEnd onClose={() => setShowModal3(false)} />,
            document.body
          )}
      </div>
      <>
        <div className="mt-56">
          <h1 className="text-center">Glückwunsch!</h1>
          <h3 className="text-center mt-2">Du hast x Tage</h3>
          <h3 className="text-center">am Stück trainiert!</h3>
          <p className="text-center mt-11">Wie war das Workout?</p>
        </div>
        <div className="flex justify-around mt-6">
          <button className="bg-greybg rounded-md w-[120px] h-[78px] flex justify-center items-center">
            <p className="w-min break-words">zu leicht</p>
          </button>
          <button className="bg-greybg rounded-md w-[120px] h-[78px] flex justify-center items-center">
            <p className="w-min break-words">genau richtig</p>
          </button>
          <button className="bg-greybg rounded-md w-[120px] h-[78px] flex justify-center items-center">
            <p className="w-min break-words">zu schwer</p>
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-greybg text-center">
            Bewertung überspringen
          </button>
        </div>
      </>
    </>
  );
}

export default ExcEnd;

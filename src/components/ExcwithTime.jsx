import React, { useState } from "react";
import { createPortal } from "react-dom";
import Popup from "../components/Popup";
import close, { ReactComponent as Close } from "../images/close.svg";

function ExcwithTime() {
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
      <div>
        <h1></h1>
      </div>
    </>
  );
}

export default ExcwithTime;

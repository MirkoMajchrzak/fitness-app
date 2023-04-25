import React from "react";

const Navbar = ({ onBrowseButtonClick, onHomeButtonClick, onProfileButtonClick }) => {
  return (
    <div className="flex justify-between bg-bar px-8 py-4 rounded-t-3xl fixed bottom-0 left-0 right-0">
      <button onClick={onHomeButtonClick}>
        <img src="./images/home.svg"></img>
      </button>
      <button onClick={onBrowseButtonClick}>
        <img src="./images/hantel.svg"></img>
      </button>
      <button onClick={onProfileButtonClick}>
        <img src="./images/profile.svg"></img>
      </button>
    </div>
  );
};

export default Navbar;

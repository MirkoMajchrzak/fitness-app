import React from "react";

export default function navbar() {
  return (
    <div className="bg-bar rounded-t-2xl fixed left-0 right-0 bottom-0">
      <div className="flex justify-between mx-10 my-2">
        <a href={`/`}>
          <img src="./images/home.svg"></img>
        </a>
        <a href={`/browse`}>
          <img src="./images/hantel.svg"></img>
        </a>
        <a href={`/profile`}>
          <img src="./images/profile.svg"></img>
        </a>
      </div>
    </div>
  );
}

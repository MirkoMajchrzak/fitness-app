import React from "react";

export default function navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bar rounded-t-2xl">
      <div className="flex justify-between mx-10">
        <img className="my-3" src="./images/home.svg" />
        <img className="my-3" src="./images/hantel.svg" />
        <img className="my-3" src="./images/profile.svg" />
      </div>
    </div>
  );
}

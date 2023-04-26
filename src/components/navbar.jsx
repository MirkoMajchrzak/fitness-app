import React from "react";

export default function navbar() {
  return (
    <div className="bg-bar rounded-t-2xl fixed left-0 right-0 bottom-0">
      <div className="flex justify-between mx-10">
        <a href="/Dash"><img className="my-3" src="./images/home.svg" /></a>
        <a href="/browse"><img className="my-3" src="./images/hantel.svg" /></a>
        <a href="/profile"><img className="my-3" src="./images/profile.svg" /></a>
      </div>
    </div>
  );
}

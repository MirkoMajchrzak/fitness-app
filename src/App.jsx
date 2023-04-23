// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="mx-5 flex-col justify-center">
          <h1 className="my-10 text-4xl text-white font-bold">Hi Mirko!</h1>
          <div className="flex justify-center">
          <img className="w-10/12" src="./images/homescreen.svg" />
          </div>
          <div className="mt-10 flex justify-between items-end">
            <h2 className="font-bold">Dein Workout heute</h2>
            <p className="font-normal text-xs">Trainingsplan</p>
          </div>
          <div className="h-52 w-full bg-greybg rounded-3xl">
            <div className="h-full m-7 flex flex-col justify-end">
              <h3 className="text-lg font-bold leading-7">Tag 2</h3>
              <h3 className="text-2xl font-bold leading-9">Titel des Programms</h3>
              <p className="mb-7 text-xs">26 Min. · Beweglichkeit</p>
            </div>
          </div>
        </div>
        <div className="bg-bar rounded-t-2xl">
        <div className="flex justify-between mx-10 mt-6">
          <img className="my-3" src="./images/home.svg" />
          <img className="my-3" src="./images/hantel.svg" />
          <img className="my-3" src="./images/profile.svg" />
        </div>
      </div>
     </div>
    );
  }
}

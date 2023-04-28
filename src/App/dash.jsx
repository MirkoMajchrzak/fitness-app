import { useQuery, gql } from "@apollo/client";

import DefaultLayout from "../Layouts/DefaultLayout";

export default function dash() {
  return (
    <DefaultLayout>
      <div className=" mb-5 mx-5 flex-col justify-center">
        <h1 className="my-10 text-4xl text-white font-bold">Hi Mirko!</h1>
        <div className="flex justify-center">
          <img className="w-10/12" src="./images/homescreen.svg" />
        </div>
        <div className="mt-10 flex justify-between items-baseline">
          <h2>Dein Workout heute</h2>
          <p className="text-xs">Trainingsplan</p>
        </div>
        <div className="h-52 w-full bg-greybg rounded-3xl">
          <div className="h-full m-7 flex flex-col justify-end">
            <h3 className="text-lg font-bold leading-7">Tag 2</h3>
            <h2>Titel des Programms</h2>
            <p className="mb-5 text-xs">26 Min. · Beweglichkeit</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

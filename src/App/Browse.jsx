import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useState } from "react";
import Exercise from "./Exercise";
import DefaultLayout from "../Layouts/DefaultLayout";

const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
    }
  }
`;

export default function browse() {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data);

  if (loading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  const { programs } = data;

  // Background Colors implemented
  const backgroundColors = [
    "bg-gradient-to-br from-orange to-pink",
    "bg-gradient-to-br from-greenblue to-seablue",
    "bg-gradient-to-br from-cyan to-yellowgreen",
  ];

  return (
    <DefaultLayout>
      <div className="mb-20 flex-col justify-center">
        <h2 className="mb-12 mt-14">Browse</h2>
        {programs.map((program, index) => (
          <Link
            to={`/exercise/${program.id}`}
            key={`program-${index}`}
            className={`flex flex-col justify-center h-48 w-full rounded-3xl mb-4 shadow-lg shadow-black ${
              // Change Background Color every time, lenght to repeat after reaching the given number of colors
              backgroundColors[index % backgroundColors.length]
            }`}
          >
            <h2 className="ml-12">{program.name}</h2>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  );
}

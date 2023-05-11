import { useQuery, gql } from "@apollo/client";
import { NavLink } from "react-router-dom";
import Exercise from "./Exercise"
import { useState } from "react";
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

  if (loading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  const { programs } = data;

  return (
    <DefaultLayout>
      <div className="mb-20 flex-col justify-center">
        <h2 className="mb-12 mt-14">Browse</h2>
        {programs.map((program, index) => (
          <NavLink
            to="/exercise"
            key={`program-${index}`}
            className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl mb-4"
          >
            <h2 className="ml-12">{program.name}</h2>
          </NavLink>
        ))}
      </div>
    </DefaultLayout>
  );
}


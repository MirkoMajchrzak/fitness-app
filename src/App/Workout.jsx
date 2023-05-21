import React from "react";
import { useQuery, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import backbtn, { ReactComponent as Backbtn } from "../images/backbtn.svg";

{/*const PROGRAM = gql`
query Program($id: ID!) {
  program(where: { id: $id }) {
    id
    name
  }
}
`;*/}

function Workout() {
  // Close Button Function
  const navigate = useNavigate();
 {/*} const { id } = useParams();

  const { data, loading, error } = useQuery(PROGRAM, {
    variables: { id },
  });
  console.log(data);

  if (loading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

const { program } = data;*/}
  return (
    <>
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <Backbtn />
      </button>
      <div>
        <p className="text-xs text-center pt-5">Programm Titel</p>
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <h1>Tag 1</h1>
          <p className="text-xs">26 Min. · Kraft und Koordination</p>
        </div>
        <div className="w-screen flex justify-center">
          <button className="bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-md z-[12]">
            <p className="text-black">los!</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Workout;
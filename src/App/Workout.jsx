import { useState } from "react";
import { createPortal } from "react-dom";
import { useQuery, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { removeFragmentSpreadFromDocument } from "@apollo/client/utilities";
import backbtn, { ReactComponent as Backbtn } from "../images/backbtn.svg";
import Popup from "../components/Popup";

const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      focus
      duration
      difficulty
      image {
        url
      }
      workouts {
        id
        duration
        category
      }
    }
  }
`;

function Workout() {
  const [showModal, setShowModal] = useState(false);
  // Close Button Function
  // const navigate = useNavigate();
  const { id } = useParams();

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

  const { program } = data;
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-5 right-5"
      >
        <Backbtn />
      </button>
      {showModal &&
        createPortal(
          <Popup onClose={() => setShowModal(false)} />,
          document.body
        )}
      <div>
        <p className="text-xs text-center pt-5">{program.name}</p>
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <h1>Tag 1</h1>
          <p className="text-xs">
            {program.workouts[0].duration} Min. · {program.workouts[0].category}
          </p>
        </div>
        <div className="w-screen flex justify-center">
        <NavLink to={`/exercise/workout/${id}/swipe`}>
          <button className="bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-lg shadow-black z-[12]">
            <p className="text-black">los!</p>
          </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Workout;

import { useState } from "react";
import { createPortal } from "react-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { removeFragmentSpreadFromDocument } from "@apollo/client/utilities";
import backbtn, { ReactComponent as Backbtn } from "../images/backbtn.svg";
import Popup from "../components/Popup";

const SET_WORKOUT_COMPLETE = gql`
  mutation SetWorkoutComplete($workoutId: ID!, $completed: Boolean!) {
    updateWorkout(data: { completed: $completed }, where: { id: $workoutId }) {
      completed
    }
  }
`;

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
  const [isComplete, setIsComplete] = useState(false);
  // Close Button Function
  // const navigate = useNavigate();
  const { id } = useParams();

  const { data, loading, error } = useQuery(PROGRAM, {
    variables: { id },
  });
  const [
    setWorkoutComplete,
    {
      data: setWorkoutCompleteData,
      loading: setWorkoutCompleteLoading,
      error: setWorkoutCompleteError,
    },
  ] = useMutation(SET_WORKOUT_COMPLETE);
  console.log(data);

  if (loading || setWorkoutCompleteLoading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error || setWorkoutCompleteError) {
    return <h2>Something went wrong...</h2>;
  }

  console.log(setWorkoutCompleteData);

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
            <button
              onClick={async () => {
                await setWorkoutComplete({
                  variables: {
                    completed: isComplete,
                    workoutId: program.workouts[0].id,
                  },
                });
                setIsComplete((oldIsComplete) => !oldIsComplete);
              }}
            >
              Set Complete
            </button>
          </p>
        </div>
        <div className="w-screen flex justify-center">
          <NavLink to={`/exercise/workout/${id}/training`}>
            <button className="relative bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-lg shadow-black z-[12]">
              <p className="text-black">los!</p>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Workout;

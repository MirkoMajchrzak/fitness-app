import { NavLink, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      workouts {
        id
        exercises {
          ... on ExerciseWithDuration {
            id
            exercise {
              id
              name
              description
              type
            }
          }
          ... on ExerciseWithReps {
            id
            exercise {
              id
              name
              description
              type
            }
          }
        }
      }
    }
  }
`;

export default function Infocard({ onClose }) {
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
    <div className="z-51 bg-greybg rounded-t-2xl">
      <div className="mx-9">
        <h1>Exercise</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non error
          unde provident, aperiam ullam dicta culpa autem accusamus consequatur
          veniam.
        </p>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={onClose}
            className="hover:bg-mainbg rounded-3xl px-6 py-3"
          >
            <p>ok!</p>
          </button>
        </div>
      </div>
    </div>
  );
}

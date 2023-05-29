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
    <div className="absolute flex justify-center top-[50px] left-0 z-50">
      <div className="w-full h-[50%] bg-greybg rounded-3xl">
        <h3 className="text-center mt-24">
          Möchtest du das Workout wirklich beenden?
        </h3>
        <div className="mt-32 mb-8 flex justify-around">
          <button
            onClick={onClose}
            className="hover:bg-mainbg rounded-3xl px-6 py-3"
          >
            <p>Nein, weiter machen!</p>
          </button>
          <NavLink to={`/exercise/${id}`}>
            <button className="hover:bg-mainbg rounded-3xl px-6 py-3">
              <p>Ja, beenden</p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

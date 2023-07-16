import { NavLink, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const PROGRAM = gql`
  query Program($programId: ID!) {
    program(where: { id: $programId }) {
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

export default function Popup({ onClose }) {
  const { programId } = useParams();

  const { data, loading, error } = useQuery(PROGRAM, {
    variables: { programId },
  });
  console.log(data);

  if (loading) {
    return <div className=""><img src="../images/loading.gif" alt="loading" /></div>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  const { program } = data;
  return (
    <div className="h-full w-full bg-mainbg bg-opacity-70 fixed flex justify-center top-0 left-0 z-[500]">
      <div className="mt-12 w-full h-[50%] bg-greybg rounded-3xl">
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
          <NavLink to={`/exercise/${program.id}`}>
            <button className="hover:bg-mainbg rounded-3xl px-6 py-3">
              <p>Ja, beenden</p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

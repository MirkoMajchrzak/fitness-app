import { useQuery, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import close, { ReactComponent as Close } from "../images/close.svg";

const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      focus
      duration
      difficulty
      workouts {
        category
      }
      image {
        url
      }
    }
  }
`;
function Workout() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/exercise/:id`;
    navigate(path);
  };
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
      <button onClick={routeChange} className="fixed top-5 right-5">
        <Close />
      </button>
      <div className=""></div>
      <button className="bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-md z-[12]">
        <p>los!</p>
      </button>
    </>
  );
}

export default Workout;

import { useQuery, gql } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import figpie, { ReactComponent as PieIcon } from "../images/figpie.svg";
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

export default function Exercise() {
  // Close Button Function
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/browse`;
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
      <div className="h-[75vh] bg-gradient-to-br from-orange to-pink flex flex-col justify-between">
        <div className="pt-[25vh]">
          <h1 className="text-center">{program.name}</h1>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">{program.focus}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">
              {program.difficulty}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">
              {program.duration} Wochen
            </p>
          </div>
        </div>
      </div>
      <div className="bg-greybg">
        <p className="px-6 py-5">{program.description}</p>
      </div>
      <div className="px-6 mt-6">
        <h3>So ist das Programm aufgeteilt:</h3>
        <div className="flex items-center mt-10">
          <div className="">
            <PieIcon />
          </div>
          <div className="ml-6 flex flex-col gap-5">
            <div className="flex">
              <div className="bg-greybg h-3 w-3 rounded-full mr-3"></div>
              <p className="text-xs">Krafttraining</p>
            </div>
            <div className="flex">
              <div className="bg-greybg h-3 w-3 rounded-full mr-3"></div>
              <p className="text-xs">Koordination</p>
            </div>
            <div className="flex">
              <div className="bg-greybg h-3 w-3 rounded-full mr-3"></div>
              <p className="text-xs">Cardio</p>
            </div>
            <div className="flex">
              <div className="bg-greybg h-3 w-3 rounded-full mr-3"></div>
              <p className="text-xs">Beweglichkeit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 px-6 flex justify-between items-baseline">
        <h3>21 Tage</h3>
        <p className="text-xs">Alle anzeigen</p>
      </div>
      <div className="mb-24">
        <div className="mx-5 my-4">
          <div className="bg-gradient-to-br from-orange to-pink w-full rounded-3xl drop-shadow-md">
            <div className="bg-greybg bg-opacity-80 rounded-r-3xl ml-[80px] z-10">
              <div className="ml-3.5 py-2.5">
                <h3>Tag 1</h3>
                <p className="text-xs mt-6">26 Min.</p>
                <p className="text-xs">Beweglichkeit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 my-4">
          <div className="bg-gradient-to-br from-greenblue to-seablue w-full rounded-3xl drop-shadow-md">
            <div className="bg-greybg bg-opacity-80 rounded-r-3xl ml-[80px]">
              <div className="ml-3.5 py-2.5">
                <h3>Tag 1</h3>
                <p className="text-xs mt-6">26 Min.</p>
                <p className="text-xs">Beweglichkeit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 my-4">
          <div className="bg-gradient-to-br from-cyan to-yellowgreen w-full rounded-3xl drop-shadow-md">
            <div className="bg-greybg bg-opacity-80 rounded-r-3xl ml-[80px]">
              <div className="ml-3.5 py-2.5">
                <h3>Tag 1</h3>
                <p className="text-xs mt-6">26 Min.</p>
                <p className="text-xs">Beweglichkeit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

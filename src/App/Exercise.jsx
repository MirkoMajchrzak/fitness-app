import { useQuery, gql } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import figpie, { ReactComponent as PieIcon } from "../images/figpie.svg";
import close, { ReactComponent as Close } from "../images/close.svg";

const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
      difficulty
    }
  }
`;

export default function Exercise() {
  //Close Button Function
  const navigate = useNavigate ();
  const routeChange = () =>{ 
    let path = `/browse`; 
    navigate(path);
  };
  const { id } = useParams();

  const { data, loading, error } = useQuery(PROGRAMS, {
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
          <h1 className="text-center">Titel des Programms</h1>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">Kraft</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">Kraft</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">Kraft</p>
          </div>
        </div>
      </div>
      <div className="bg-greybg">
        <p className="px-6 py-5">
          Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
          Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
          Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
          Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt
          sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in
          dem einem gebratene Satzteile in den Mund fliegen.
        </p>
      </div>
      <div className="px-6 mt-6">
        <h3>So ist das Programm aufgeteilt:</h3>
        <div className="flex items-center mt-10">
          <div className="">
            <PieIcon />
          </div>
          <div className="ml-8 flex flex-col gap-5">
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
    </>
  );
}

import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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
  // navigate to use on close button to get back to previous page
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[75vh] w-full bg-gradient-to-br from-orange to-pink">
        <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
          <Close />
        </button>
        <div className="flex flex-col justify-between">
          <h1 className="my-[44%] text-center">Titel des Programms</h1>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 bg-greybg rounded-full"></div>
              <p className="mt-2 mb-4 uppercase text-center">Kraft</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 bg-greybg rounded-full"></div>
              <p className="mt-2 mb-4 uppercase text-center">Kraft</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 bg-greybg rounded-full"></div>
              <p className="mt-2 mb-4 uppercase text-center">Kraft</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 my-5">
        <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.</p>
      </div>
    </>
  );
}

import { NavLink } from "react-router-dom";
import Thumbs from "../images/bb_tu.png";

export default function PopupRating() {
  return (
    <div className="h-full w-full bg-mainbg bg-opacity-70 fixed flex justify-center top-0 left-0 z-[500]">
      <div className="mt-10 w-full h-[50%] bg-greybg rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-center mt-16">
            Vielen Dank für Deine Bewertung.
          </h3>
          <img className="mt-8 w-[30%]" src={Thumbs} alt="Thumbs Up" />
        </div>
        <div className="mt-10 mb-8 flex justify-around">
          <NavLink to={`/`}>
            <button className="bg-mainbg rounded-3xl px-6 py-3">
              <p>zurück zum Dashboard</p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

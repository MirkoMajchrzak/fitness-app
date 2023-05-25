import { NavLink } from "react-router-dom";

export default function Popup({ onClose }) {
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
          <NavLink to="/browse">
            <button className="hover:bg-mainbg rounded-3xl px-6 py-3">
              <p>Ja, beenden</p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

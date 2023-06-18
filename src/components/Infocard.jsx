import { NavLink, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export default function Infocard({ onClose }) {
  return (
    <div className="h-[75vh] w-full bg-mainbg bg-opacity-20 fixed flex justify-center bottom-0 left-0 z-[800]">
      <div className="z-51 bg-greybg rounded-t-2xl">
        <div className="mx-9">
          <h1>Exercise</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non error
            unde provident, aperiam ullam dicta culpa autem accusamus
            consequatur veniam.
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
    </div>
  );
}

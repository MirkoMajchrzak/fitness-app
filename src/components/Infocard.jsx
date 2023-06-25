import { ReactComponent as Close } from "../images/close.svg";

export default function Infocard({ onClose, exercise }) {
  return (
    <div className="absolute z-[699] h-[100vw] top-0 bg-mainbg bg-opacity-20">
      <div className="min-h-[75vh] max-h-[100vh] w-full fixed flex justify-center bottom-0 left-0 z-[700]">
        <div className="bg-greybg rounded-t-2xl bottom-0 left-0 w-full z-[750] overflow-auto">
          <div className="mx-9">
            <h1 className="mt-8">{exercise.exercise.name}</h1>
            <div className="mb-5">
              <p>{exercise.exercise.description}</p>
            </div>
            <div className="flex flex-col justify-center items-center mb-20">
              <button
                onClick={onClose}
                className="bg-mainbg rounded-full px-6 py-3 mt-4 right-6"
              >
                <p>ok!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import close, { ReactComponent as Close } from "../images/close.svg";

function Exercise() {
  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-mainbg z-10">
      <button className="fixed top-5 right-5">
        <Close />
      </button>
      <div className="top-0 h-3/4 w-full bg-gradient-to-br from-orange to-pink flex flex-col justify-center">
        <div className="">
          <h1 className="text-center">Excercise</h1>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-greybg"></div>
              <p className="text-xs leading-3 uppercase text-center">Kraft</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-greybg"></div>
              <p className="text-xs leading-3 uppercase text-center">Leicht</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-greybg"></div>
              <p className="text-xs leading-3 uppercase text-center">
                6 Wochen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;

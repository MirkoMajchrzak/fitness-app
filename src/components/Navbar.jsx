import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-bar rounded-t-2xl fixed left-0 right-0 bottom-0">
      <div className="flex justify-between mx-10 my-3">
        <Link to="/">
          <img src="./images/home.svg"></img>
        </Link>
        <Link to="/browse">
          <img src="./images/hantel.svg"></img>
        </Link>
        <Link to="/profile">
          <img src="./images/profile.svg"></img>
        </Link>
      </div>
    </div>
  );
}

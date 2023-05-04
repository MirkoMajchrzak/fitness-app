import { NavLink } from "react-router-dom";
import home, { ReactComponent as HomeIcon } from "../images/home.svg";
import browse, { ReactComponent as BrowseIcon } from "../images/hantel.svg";
import profile, { ReactComponent as ProfileIcon } from "../images/profile.svg";


export default function Navbar() {
  return (
    <div className="bg-bar rounded-t-2xl fixed left-0 right-0 bottom-0">
      <div className="flex justify-between mx-10 my-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-greybg"
          }
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-greybg"
          }
        >
          <BrowseIcon />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-greybg"
          }
        >
          <ProfileIcon />
        </NavLink>
      </div>
    </div>
  );
}

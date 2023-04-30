import { NavLink } from "react-router-dom";

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
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.2842 2.29347L1.90775 9.47202C1.41343 9.85046 1.12354 10.4375 1.12354 11.0601L1.12354 17.0178L1.12354 21.6372C1.12354 22.7418 2.01897 23.6372 3.12354 23.6372L6.86196 23.6372C7.96653 23.6372 8.86196 22.7418 8.86196 21.6372L8.86196 16.6504C8.86196 15.5458 9.75739 14.6504 10.862 14.6504L13.8303 14.6504C14.9349 14.6504 15.8303 15.5458 15.8303 16.6504L15.8303 21.6372C15.8303 22.7418 16.7257 23.6372 17.8303 23.6372L21.8765 23.6372C22.981 23.6372 23.8765 22.7418 23.8765 21.6372L23.8765 11.0601C23.8765 10.4375 23.5866 9.85046 23.0923 9.47202L13.7158 2.29347C12.9983 1.74418 12.0017 1.74418 11.2842 2.29347Z" />
          </svg>
        </NavLink>
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-greybg"
          }
        >
          <svg
            width="38"
            height="21"
            viewBox="0 0 38 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6.01849"
              y="1.82422"
              width="6.81208"
              height="17.3514"
              rx="2"
            />
            <rect
              x="12.8306"
              y="13.906"
              width="6.81208"
              height="12.3387"
              rx="2"
              transform="rotate(-90 12.8306 13.906)"
            />
            <rect
              x="25.1694"
              y="1.82422"
              width="6.81208"
              height="17.3514"
              rx="2"
            />
            <rect
              x="31.9815"
              y="4.90894"
              width="4.39001"
              height="11.182"
              rx="2"
            />
            <rect
              x="1.62848"
              y="4.90894"
              width="4.39001"
              height="11.182"
              rx="2"
            />
          </svg>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-greybg"
          }
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="11.5" />
            <circle cx="12.5" cy="10.0549" r="4.33639" />
            <path d="M19.7267 21.7374C19.7267 17.1939 17.0435 14.5107 12.5001 14.5107C7.95662 14.5107 5.27344 17.1939 5.27344 21.7374" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

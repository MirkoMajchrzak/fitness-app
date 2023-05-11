import { useQuery, gql } from "@apollo/client";
import { NavLink, useNavigate } from "react-router-dom";
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
    const { data, loading } = useQuery(PROGRAMS);
  
  // navigate to use on close button to get back to previous page
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 h-3/4 w-full bg-gradient-to-br from-orange to-pink z-10">
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <Close />
      </button>
    </div>
  );
}

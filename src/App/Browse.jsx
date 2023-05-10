import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Exercise from "../Overlay/Exercise";

const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
    }
  }
`;

export default function browse() {
  const { data, loading, error } = useQuery(PROGRAMS);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  const Button = ({ onClick, children }) => {
    return (
      <button type="button" className="btn-browse" onClick={onClick}>
        {children}
      </button>
    );
  };

  if (loading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }
  const { programs } = data;
  return (
    <DefaultLayout>
      <div className="mb-20 flex-col justify-center">
        <h2 className="mb-12 mt-14">Browse</h2>
        {programs.map((program, index) => (
          <Button
            onClick={handleClick}
            key={`program-${index}`}
            className="w-full cursor-pointer"
          >
            <div
              className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl mb-4"
              key={`program-${index}`}
            >
              <h2 className="ml-12">{program.name}</h2>
            </div>
          </Button>
        ))}
        {isOpen && <Exercise />}
      </div>
    </DefaultLayout>
  );
}

/* <>
          <Button onClick={handleClick} className="w-full cursor-pointer">
            <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl mb-4">
              <h2 className="ml-12">{data.programs[1].name}</h2>
            </div>
          </Button>
          {isOpen && <Exercise />}
        </>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-cyan to-yellowgreen rounded-3xl mb-4">
          <h2 className="ml-12">{data.programs[0].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-greenblue to-seablue rounded-3xl mb-4">
          <h2 className="ml-12">{data.programs[1].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl mb-4">
          <h2 className="ml-12">{data.programs[0].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-cyan to-yellowgreen rounded-3xl mb-4">
          <h2 className="ml-12">{data.programs[1].name}</h2>
        </div>
  </div> */

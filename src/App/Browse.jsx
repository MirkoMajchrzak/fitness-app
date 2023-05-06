import DefaultLayout from "../Layouts/DefaultLayout";
import { useQuery, gql } from "@apollo/client";

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

  if (loading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <DefaultLayout>
      <div className="mb-20 mx-5 flex-col justify-center space-y-4">
        <h2 className="mt-14">Browse</h2>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl">
          <h2 className="ml-12">{data.programs[1].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-cyan to-yellowgreen rounded-3xl">
          <h2 className="ml-12">{data.programs[0].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-greenblue to-seablue rounded-3xl">
          <h2 className="ml-12">{data.programs[1].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl">
          <h2 className="ml-12">{data.programs[0].name}</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-cyan to-yellowgreen rounded-3xl">
          <h2 className="ml-12">{data.programs[1].name}</h2>
        </div>
      </div>
    </DefaultLayout>
  );
}

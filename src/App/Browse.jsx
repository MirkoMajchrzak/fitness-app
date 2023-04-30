import DefaultLayout from "../Layouts/DefaultLayout";
import { useQuery, gql } from "@apollo/client";

export default function browse() {
  return (
    <DefaultLayout>
      <div className="mb-20 mx-5 flex-col justify-center space-y-4">
        <h2 className="mt-14">Browse</h2>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl">
          <h2 className="ml-12">Titel des Programms</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-cyan to-yellowgreen rounded-3xl">
          <h2 className="ml-12">100 Push-Ups Challenge</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-greenblue to-seablue rounded-3xl">
          <h2 className="ml-12">Titel des Programms</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-orange to-pink rounded-3xl">
          <h2 className="ml-12">Stretch and Relax</h2>
        </div>
        <div className="flex flex-col justify-center h-48 w-full bg-gradient-to-br from-cyan to-yellowgreen rounded-3xl">
          <h2 className="ml-12">Titel des Programms</h2>
        </div>
      </div>
    </DefaultLayout>
  );
}

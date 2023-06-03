import { useQuery, gql } from "@apollo/client";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import close, { ReactComponent as Close } from "../images/close.svg";
import Exbutton from "../components/Exbutton";

const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      focus
      duration
      difficulty
      image {
        url
      }
      workouts {
        id
        duration
        category
      }
    }
  }
`;

export default function Exercise() {
  // Close Button Function
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/browse`;
    navigate(path);
  };
  const { id } = useParams();

  const { data, loading, error } = useQuery(PROGRAM, {
    variables: { id },
  });

  if (loading) {
    return <h2>Loading, take your supps... </h2>;
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  const { program } = data;

  const backgroundColors = [
    "bg-gradient-to-br from-orange to-pink",
    "bg-gradient-to-br from-greenblue to-seablue",
    "bg-gradient-to-br from-cyan to-yellowgreen",
  ];

  const workoutData = program.workouts.reduce(
    (acc, workout) => {
      acc.categories = acc.categories.includes(workout.category)
        ? acc.categories
        : [...acc.categories, workout.category];

      acc.pieData[workout.category] = (acc.pieData[workout.category] || 0) + 1;

      acc.total++;

      return acc;
    },
    { categories: [], pieData: {}, total: 0 }
  );

  const pieChartData = workoutData.categories.map((category) => ({
    [category]: workoutData.pieData[category] / workoutData.total,
  }));

  const singleValues = pieChartData.map((data) => Object.values(data)[0]); // to get the values out of the pieChartData

  const workoutCategoryLabels = {
    weightTraining: "Krafttraining",
    mobility: "Mobilität",
    cardio: "Ausdauer",
    coordination: "Koordination",
  };

  const workoutCategoryColors = {
    weightTraining: "#66ccff",
    cardio: "#ff99ff",
    mobility: "#99ffcc",
    coordination: "#ccff33",
  };

  return (
    <>
      <button onClick={routeChange} className="fixed top-5 right-5">
        <Close />
      </button>
      <div
        style={{
          backgroundImage: `url(${program.image.url})`,
          backgroundSize: "cover",
        }}
        className="h-[75vh] flex flex-col justify-between"
      >
        <div className="pt-[25vh]">
          <h1 className="text-center">{program.name}</h1>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">{program.focus}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">
              {program.difficulty}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-greybg rounded-full"></div>
            <p className="mb-4 mt-2 text-center uppercase">
              {program.duration} Wochen
            </p>
          </div>
        </div>
      </div>
      <NavLink to={`/exercise/workout/${id}`}>
        <div className="flex justify-center">
          <button className="bg-gradient-to-br from-orange to-pink rounded-3xl fixed px-4 py-3 bottom-8 shadow-lg shadow-black z-[12]">
            <p className="text-black">Los geht´s!!!</p>
          </button>
        </div>
      </NavLink>
      <div className="bg-greybg">
        <p className="px-6 py-5">{program.description}</p>
      </div>
      <div className="px-6 mt-6">
        <h3>So ist das Programm aufgeteilt:</h3>
        <div className="flex items-center mt-10">
          <div className="">
            <PieChart
              data={singleValues.map((value, index) => ({
                title: `Data ${index + 1}`,
                value: value * 100, // Multiply by 100 to get the percent value
                color: workoutCategoryColors[Object.keys(pieChartData[index])[0]],
              }))}
              segmentsShift={
                (index) => (index === singleValues.length - 1 ? 0 : 0.2) // to get a gap between the values, doesnt look nice yet
              }
            />
          </div>
          <div className="ml-6 flex flex-col gap-5">
            {pieChartData.map((category, index) => (
              <div key={`program-${index}`} className="flex">
                <div className="h-3 w-3 rounded-full mr-3"
                style={{
                  backgroundColor: workoutCategoryColors[Object.keys(category)[0]],
                }}></div>
                <p className="text-xs">
                  {workoutCategoryLabels[Object.keys(category)[0]]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 px-6 flex justify-between items-baseline">
        <h3>{`${program.duration}` * 7} Tage</h3>
        <p className="text-xs">Alle anzeigen</p>
      </div>
      <div className="mb-24">
        {program.workouts.map((workout, index) => (
          <div key={`program-${index}`} className="mb-2">
            <div className="mx-5 my-4">
              <div
                className={`${
                  backgroundColors[index % backgroundColors.length]
                } w-full rounded-3xl shadow-lg shadow-black`}
              >
                <div className="bg-greybg bg-opacity-80 rounded-r-3xl ml-[80px] z-10">
                  <div className="ml-3.5 py-2.5">
                    <h3>Tag {index + 1}</h3>
                    <p className="text-xs mt-6">{workout.duration} Min.</p>
                    <p className="text-xs">{workout.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// import { getWeatherData } from "../api/getWeatherData";
// import useSWR from "swr";
import HeadSection from "./headSection/HeadSection";
import RigthSideBar from "./mainSection/rightSidebar/RightSidebar";
import { useState } from "react";

const DisplayWeatherApp = () => {
  const [currentCity, setCurrentCity] = useState("Bishkek");
  // const { data } = useSWR(
  //   ["https://api.openweathermap.org/data/2.5/weather", currentCity],
  //   ([key, currentCity]) => getWeatherData(key, currentCity)
  // );

  // console.log(data);
  return (
    <>
     
      <HeadSection currentCity={currentCity} />
      <RigthSideBar currentCity={currentCity}/>
    </>
  );
};

export default DisplayWeatherApp;

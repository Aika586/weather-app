import { getWeatherData } from "../api/getWeatherData";
import useSWR from "swr";
import HeadSection from "./headSection/HeadSection";
import RigthSideBar from "./mainSection/rightSidebar/RightSidebar";
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import Menu from "../assets/images/Menu.png";
import Activities from "../assets/images/Activities.png";
import Chart from "../assets/images/chart.png";
import styles from "./DisplayWeather.module.css";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./mobileApp/MobileApp.jsx";

const DisplayWeatherApp = () => {
  const [search, setSearch] = useState("");
  const [currentCity, setCurrentCity] = useState("Bishkek");
  const [showInput, setShowInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const {
    data: currentWeatherData,
    isLoading,
    error,
  } = useSWR(["weather", currentCity], ([key, currentCity]) =>
    getWeatherData(key, currentCity)
  );
  const [currentCityTime, setCurrentCityTime] = useState(null);

  console.log(error);

  useEffect(() => {
    if (currentWeatherData) {
      const timezoneOffsetSeconds = currentWeatherData.timezone;
      const currentDateTime = moment().utcOffset(timezoneOffsetSeconds / 60);
      setCurrentCityTime(currentDateTime);

      const intervalId = setInterval(() => {
        const newDateTime = moment().utcOffset(timezoneOffsetSeconds / 60);
        setCurrentCityTime(newDateTime);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [currentWeatherData]);

  const handleArrowClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleSearch = () => {
    if (!search.trim()) {
      setErrorMessage("Please enter a city name");
      return;
    }
    setCurrentCity(search.trim());
    setSearch("");
    setShowInput(false);
    setErrorMessage("");
  };

  if (error) {
    return <h1>No matching location found. Please reload the page </h1>;
  }

  return isMobile ? (
    <MobileApp
      currentCityTime={currentCityTime}
      currentWeatherData={currentWeatherData}
      handleArrowClick={handleArrowClick}
      value={search}
      onSearch={handleSearch}
      updateSearch={(e) => setSearch(e.target.value)}
      showInput={showInput}
      errorInputMessage={errorMessage}
      currentCity={currentCity}
    />
  ) : (
    <>
      <HeadSection
        currentCityTime={currentCityTime}
        currentWeatherData={currentWeatherData}
        handleArrowClick={handleArrowClick}
        value={search}
        onSearch={handleSearch}
        updateSearch={(e) => setSearch(e.target.value)}
        showInput={showInput}
        errorInputMessage={errorMessage}
      />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <div>
            {" "}
            <img src={Menu} alt="menubar" />
          </div>
          <div className={styles.middleContainer}>
            <img src={Activities} alt="activities" />
            <img src={Chart} alt="chart" />
          </div>

          <div className={styles.rightbar}>
            <RigthSideBar
              currentCity={currentCity}
              currentCityTime={currentCityTime}
              currentWeatherData={currentWeatherData}
              isLoading={isLoading}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default DisplayWeatherApp;

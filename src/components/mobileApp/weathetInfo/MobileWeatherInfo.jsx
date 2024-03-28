import styles from "./WeatherInfo.module.css";
import Temperature from "../../Temperature/Temperature";
import { weatherIcons } from "../../../constants/weatherIcons";

const MobileWeatherInfo = ({ currentWeatherData,currentCityTime }) => {
  return (
    currentWeatherData && (
      <div className={styles.weatherInfo}>
        <p className={styles.Wdescription}>{currentWeatherData?.weather[0].main}</p>
        <div className={styles.weather_icon_container}>
          <img
            src={weatherIcons[currentWeatherData?.weather[0].main]}
            className={styles.weatherIcons}
            alt={currentWeatherData?.weather[0].description}
          />
        </div>
        <Temperature isMobile currentWeatherData={currentWeatherData} currentCityTime={currentCityTime}/>
      </div>
    )
  );
};

export default MobileWeatherInfo;
